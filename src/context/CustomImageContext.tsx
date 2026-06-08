import React, { createContext, useContext, useState, useEffect } from "react";

interface CustomImageContextType {
  images: Record<string, string>;
  updateImage: (key: string, file: File) => Promise<void>;
  resetAllImages: () => void;
  isEditingSession: boolean;
  setIsEditingSession: (value: boolean) => void;
}

const DEFAULT_IMAGES = {
  hero: "/src/assets/images/abacha_hero_1780862112222.png",
  about: "/src/assets/images/abacha_classic_1780862129087.png",
  catering: "/src/assets/images/abacha_catering_1780862144923.png",
  gallery_0: "/src/assets/images/abacha_classic_1780862129087.png",
  gallery_1: "/src/assets/images/abacha_hero_1780862112222.png",
  gallery_2: "/src/assets/images/abacha_catering_1780862144923.png",
  gallery_3: "https://picsum.photos/seed/kitchenprep_abacha/600/600",
  gallery_4: "https://picsum.photos/seed/eventsetting/600/600",
  gallery_5: "https://picsum.photos/seed/happyclient_abacha/600/600",
  reel_0: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&q=80&w=500",
  reel_1: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=500",
  reel_2: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=500",
  reel_3: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=500",
  menu_classic: "/src/assets/images/abacha_classic_1780862129087.png",
  menu_spicy: "/src/assets/images/abacha_classic_1780862129087.png",
  menu_combo: "/src/assets/images/abacha_catering_1780862144923.png",
};

const CustomImageContext = createContext<CustomImageContextType | undefined>(undefined);

// Web-standard image resizer to avoid large files crashing localStorage/memory
function resizeAndCompressImage(file: File, maxWidth = 1000, maxHeight = 1000): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);

        // Compresses down to safe JPEG with 0.75-0.8 quality
        const compressedBase64 = canvas.toDataURL("image/jpeg", 0.8);
        resolve(compressedBase64);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

export function CustomImageProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<Record<string, string>>(DEFAULT_IMAGES);
  const [isEditingSession, setIsEditingSession] = useState<boolean>(false);

  // Initialize from LocalStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("abacha_village_custom_images");
      if (saved) {
        const parsed = JSON.parse(saved);
        setImages((prev) => ({ ...prev, ...parsed }));
      }
    } catch (e) {
      console.error("Failed loading saved images from localStorage", e);
    }
  }, []);

  const updateImage = async (key: string, file: File) => {
    try {
      const base64 = await resizeAndCompressImage(file);
      const updated = { ...images, [key]: base64 };
      setImages(updated);
      localStorage.setItem("abacha_village_custom_images", JSON.stringify(updated));
    } catch (e) {
      console.error("Error updating customized image", e);
      throw e;
    }
  };

  const resetAllImages = () => {
    setImages(DEFAULT_IMAGES);
    localStorage.removeItem("abacha_village_custom_images");
  };

  return (
    <CustomImageContext.Provider value={{ images, updateImage, resetAllImages, isEditingSession, setIsEditingSession }}>
      {children}
    </CustomImageContext.Provider>
  );
}

export function useCustomImages() {
  const context = useContext(CustomImageContext);
  if (!context) {
    throw new Error("useCustomImages has to be used within CustomImageProvider");
  }
  return context;
}
