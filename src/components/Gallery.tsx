import React, { useState, useEffect } from "react";
import { Instagram, Play, Pause, X, MessageSquare, Heart, Volume2, Send, Sparkles, Upload } from "lucide-react";
import { useCustomImages } from "../context/CustomImageContext";

interface ReelStory {
  id: string;
  title: string;
  sub: string;
  cover: string;
  duration: string;
  lines: string[];
  waPhrase: string;
}

export default function Gallery() {
  const [selectedReel, setSelectedReel] = useState<ReelStory | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reelProgress, setReelProgress] = useState(0);
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({
    palmwine: 142,
    dining: 328,
    plating: 284,
    spices: 195,
  });

  const { images: customImages, updateImage, isEditingSession } = useCustomImages();

  const reels: ReelStory[] = [
    {
      id: "palmwine",
      title: "Tapping & Pouring Palm Wine",
      sub: "Naturally tapped local drink poured from native calabash",
      cover: customImages.reel_0,
      duration: "0:09",
      lines: [
        "Poured ice-cold from natural native calabash gourds...",
        "Sweet, bubbling, totally unfiltered, and naturally tapped!",
        "The absolute ultimate traditional pairing to cool down spicy Abacha."
      ],
      waPhrase: "Hi Abacha Village! I watched your Palm Wine pouring reel and want to order a cold calabash gourd with my next bowl!"
    },
    {
      id: "dining",
      title: "Abuja Vibe: The Wuse Hub",
      sub: "Group sharing organic wooden bowls filled with delight",
      cover: customImages.reel_1,
      duration: "0:12",
      lines: [
        "Laughter, friends, and sharing a massive authentic wooden platter...",
        "Everyone's raving: 'There is absolutely no filter needed on this food!'",
        "Abacha Village takes standard street food and elevates it to luxury."
      ],
      waPhrase: "Hi Abacha Village! I saw the Wuse Hub Dining reel and want to secure a giant wooden platter for my friends this weekend!"
    },
    {
      id: "plating",
      title: "Handcrafting Your Portions",
      sub: "Scent leaves, garden eggs, dry fish, and rich red oil",
      cover: customImages.reel_2,
      duration: "0:10",
      lines: [
        "Watch our chef layer authentic red palm oil over shredded cassava...",
        "Topping with raw sliced onions, ugba, and direct catfish portions.",
        "Your platter packed fresh in leakproof, double-sealed premium casing."
      ],
      waPhrase: "Hi Abacha Village! I just watched the Plating reel. I want my bowl to be spiced classic hot with extra catfish ugba!"
    },
    {
      id: "spices",
      title: "Behind-The-Scenes: Spice Crushing",
      sub: "Milling direct raw spices with zero chemical preservatives",
      cover: customImages.reel_3,
      duration: "0:15",
      lines: [
        "Hand-milling organic hot peppers, crayfish, and local potash emulsifier...",
        "No yellow food dyes, no artificial broth powders, just pure nature.",
        "That deep, slow-burned traditional smokiness keeping clients recurring!"
      ],
      waPhrase: "Hi Abacha Village! I want the authentic ugba mix. I watched the Spice Milling reel, and want to confirm my delivery."
    }
  ];

  const images = [
    {
      src: customImages.gallery_0,
      alt: "Classic Abacha plated luxury close-up shot",
      caption: "Classic Abacha Close-up Plate",
    },
    {
      src: customImages.gallery_1,
      alt: "Gourmet Abacha mixed with fresh red palm oil and dried fish topmost",
      caption: "Our Signature Wooden Bowl Serve",
    },
    {
      src: customImages.gallery_2,
      alt: "Premium Nigerian dining table event catering layout",
      caption: "Owambe Event Buffet Catering Setup",
    },
    {
      src: customImages.gallery_3,
      alt: "Artisanal cassava kneading and spice milling behind the scenes",
      caption: "Fresh Kitchen Preparations Daily",
    },
    {
      src: customImages.gallery_4,
      alt: "Local dining table with Nigerian delicacies and spices",
      caption: "Premium Portion Catering Displays",
    },
    {
      src: customImages.gallery_5,
      alt: "Happy Abuja resident holding the Abacha Village takeaway box",
      caption: "Satisfied Customer Home Delivery",
    },
  ];

  // Reel video playback progress simulation loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (selectedReel && isPlaying) {
      interval = setInterval(() => {
        setReelProgress((prev) => {
          if (prev >= 100) {
            return 0; // Loop play
          }
          return prev + 1.25; // Completes loop in approx. 8 seconds
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [selectedReel, isPlaying]);

  // Handle Reel toggles
  const handleOpenReel = (reel: ReelStory) => {
    if (isEditingSession) return;
    setSelectedReel(reel);
    setReelProgress(0);
    setIsPlaying(true);
  };

  const handleCloseReel = () => {
    setSelectedReel(null);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLikeReel = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const alreadyLiked = likedReels[id];
    setLikedReels((prev) => ({ ...prev, [id]: !alreadyLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [id]: alreadyLiked ? prev[id] - 1 : prev[id] + 1,
    }));
  };

  // Get active subtitle index based on 0-100 progress
  const getActiveSubtitleIndex = () => {
    if (reelProgress < 33) return 0;
    if (reelProgress < 66) return 1;
    return 2;
  };

  return (
    <section className="bg-[#0C0C0C] text-cream py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-display text-[9px] tracking-[0.4em] text-gold uppercase block mb-3">
            Local Gallery & Stories
          </span>
          <h2 className="font-serif font-extralight text-3xl sm:text-5xl text-white tracking-wide leading-tight">
            Real Food. Real Portions.<br />No Filters Needed.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#888] mt-4 font-light leading-relaxed">
            Every snapshot and reel below is a genuine dining moment — the exact premium presentation, organic local freshness, and cultural warmth you can expect.
          </p>
        </div>

        {/* --- DYNAMIC INTERACTIVE STORIES SECTION --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <span className="text-sm">🎬</span>
            <h3 className="font-serif font-light text-xl text-white tracking-wide">
              Village Video Moments <span className="text-xs text-gold font-display uppercase tracking-[0.15em] ml-2 font-light bg-gold/10 px-2.5 py-0.5 border border-gold/20">Interactive Reels</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reels.map((reel, idx) => (
              <div
                key={reel.id}
                onClick={() => handleOpenReel(reel)}
                className="relative rounded-none overflow-hidden aspect-[9/16] bg-[#141414] border border-white/10 hover:border-[#D4AF37]/60 transition-all p-1.5 cursor-pointer group shadow-lg flex flex-col justify-between"
              >
                {/* Media representation */}
                <div className="absolute inset-1.5 overflow-hidden">
                  <img
                    src={reel.cover}
                    alt={reel.title}
                    className="w-full h-full object-cover brightness-[0.4] group-hover:brightness-[0.25] group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                </div>

                {/* Top Badge Overlay */}
                <div className="relative z-10 flex justify-between items-start pt-2 px-2.5">
                  <span className="inline-flex items-center gap-1.5 bg-red-600 text-[8px] font-display font-medium px-2 py-0.5 uppercase tracking-widest text-white shadow-md animate-pulse">
                    <span className="w-1.0 h-1.0 rounded-full bg-white"></span> REEL
                  </span>
                  <span className="text-[9px] font-mono text-white/50 bg-black/50 px-1.5 py-0.5 rounded-none font-light">
                    {reel.duration}
                  </span>
                </div>

                {/* Inline Editing Overlay for Reel Covers */}
                {isEditingSession && (
                  <div 
                    className="absolute inset-1.5 bg-black/85 z-20 flex flex-col items-center justify-center p-2 text-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Upload className="text-[#D4AF37] mb-1.5 animate-pulse" size={16} />
                    <span className="font-serif text-[10px] text-white block leading-none">Reel {idx+1} Cover</span>
                    <label className="inline-block px-3 py-1 bg-[#D4AF37] hover:bg-white text-black font-display text-[8px] uppercase tracking-wider font-medium cursor-pointer transition-colors mt-2">
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            await updateImage(`reel_${idx}`, file);
                          }
                        }}
                      />
                    </label>
                  </div>
                )}

                {/* Giant Play Icon animation */}
                {!isEditingSession && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="p-3.5 bg-transparent border border-[#D4AF37]/50 rounded-full text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-md">
                      <Play size={13} fill="currentColor" className="translate-x-[0.5px]" />
                    </div>
                  </div>
                )}

                {/* Caption Details */}
                <div className="relative z-10 p-3 bg-black/40 backdrop-blur-[2px] border-t border-white/5">
                  <h4 className="font-serif font-light text-xs text-white leading-tight group-hover:text-gold transition-colors">
                    {reel.title}
                  </h4>
                  <p className="font-sans text-[9px] text-[#888] mt-1 leading-snug line-clamp-1">
                    {reel.sub}
                  </p>
                  
                  {/* Dynamic Likes Count widget */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                    <button
                      onClick={(e) => handleLikeReel(reel.id, e)}
                      className="flex items-center gap-1 text-[9px] text-[#A3A3A3] hover:text-[#D4AF37] transition-colors"
                    >
                      <Heart
                        size={10}
                        className={likedReels[reel.id] ? "text-red-500 fill-current" : ""}
                      />
                      <span>{likeCounts[reel.id]} likes</span>
                    </button>
                    <span className="text-[9px] text-gold/80 italic font-serif">View Vibe →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SNAPSHOTS GALLERY (EXISTING PHOTO GRID) --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <span className="text-sm">📸</span>
            <h3 className="font-serif font-light text-xl text-white tracking-wide">
              Abuja Transaction Snapshots <span className="text-xs text-[#888] font-sans font-light ml-2">Unfiltered Dishes Received By Clients</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-none overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 p-2 bg-[#141414] shadow-lg group select-none aspect-square animate-fade-in"
              >
                <div className="relative w-full h-full overflow-hidden bg-neutral-900 border border-white/5">
                  {/* Image with referrerPolicy safeguard */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />

                  {/* Inline upload panel on customization */}
                  {isEditingSession && (
                    <div className="absolute inset-0 bg-black/85 z-20 flex flex-col items-center justify-center p-3 text-center">
                      <Upload className="text-[#D4AF37] mb-2 animate-pulse" size={18} />
                      <span className="font-serif text-[11px] text-white block mb-2">Gallery Photo #{idx + 1}</span>
                      <label className="inline-block px-4 py-1.5 bg-[#D4AF37] hover:bg-white text-black font-display text-[8px] uppercase tracking-wider font-medium cursor-pointer transition-colors">
                        Choose Image
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              await updateImage(`gallery_${idx}`, file);
                            }
                          }}
                        />
                      </label>
                    </div>
                  )}

                  {/* Black gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent p-5 pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <span className="text-gold font-serif font-light text-sm leading-none">
                      {img.caption}
                    </span>
                    <p className="text-[10px] text-[#888] mt-1.5 font-sans leading-relaxed">
                      Verified Abacha Village Batch snapshot.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- MODAL REEL POPUP SIMULATOR --- */}
        {selectedReel && !isEditingSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
            {/* Click outside container closes */}
            <div className="absolute inset-0" onClick={handleCloseReel}></div>

            {/* Simulated Mobile Reel Player Frame */}
            <div className="relative w-full max-w-[360px] aspect-[9/16] bg-black border border-white/20 shadow-2xl flex flex-col justify-between overflow-hidden animate-scale-up z-10">
              
              {/* Loop Cover Image representation */}
              <div className="absolute inset-0 z-0">
                <img
                  src={selectedReel.cover}
                  alt={selectedReel.title}
                  className={`w-full h-full object-cover brightness-[0.35] transition-all duration-300 ${isPlaying ? "scale-102 animate-pulse" : "scale-100"}`}
                  referrerPolicy="no-referrer"
                />
                {/* Visual grid lining overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/80" />
              </div>

              {/* TOP ACTIONS PANEL */}
              <div className="relative z-10 p-3 pt-4">
                {/* Progress Stories Indicators */}
                <div className="h-1 bg-white/20 w-full mb-4 rounded-full overflow-hidden flex">
                  <div
                    className="h-full bg-[#D4AF37] transition-all duration-100 ease-linear"
                    style={{ width: `${reelProgress}%` }}
                  />
                </div>

                {/* Profile row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {/* Tiny logo */}
                    <div className="h-7 w-7 border border-[#D4AF37]/50 rounded-none bg-black flex items-center justify-center font-display text-[9px] font-bold text-gold">
                      AV
                    </div>
                    <div>
                      <h5 className="font-serif font-light text-xs text-white leading-none">
                        abachavillage
                      </h5>
                      <span className="text-[8px] text-[#A3A3A3] mt-0.5 block tracking-widest uppercase">
                        Abuja, Nigeria
                      </span>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleCloseReel}
                    className="p-1.5 hover:bg-white/10 text-white rounded-none transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* CENTER SCREEN PLAY/PAUSE INTERACTION ZONE */}
              <div 
                className="absolute inset-x-0 top-20 bottom-32 z-10 flex items-center justify-center cursor-pointer select-none"
                onClick={handleTogglePlay}
              >
                {!isPlaying && (
                  <div className="p-4 bg-black/50 border border-white/10 rounded-full text-gold backdrop-blur-sm animate-scale-up">
                    <Play size={20} fill="currentColor" />
                  </div>
                )}
                {isPlaying && (
                  <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-black/40 px-2 py-1 border border-white/5 text-[8px] font-mono text-gold tracking-wide uppercase">
                    <Volume2 size={10} />
                    <span>MUTED AUDIO MOCK</span>
                  </div>
                )}
              </div>

              {/* VERTICAL SIDEBAR FLOATING SOCIAL BUTTONS */}
              <div className="absolute right-3.5 bottom-36 z-20 flex flex-col gap-5 items-center">
                
                {/* Heart Button */}
                <button
                  onClick={(e) => handleLikeReel(selectedReel.id, e)}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className={`p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white group-hover:scale-110 group-hover:border-red-500/50 transition-all ${likedReels[selectedReel.id] ? "bg-red-500/10 border-red-500" : ""}`}>
                    <Heart
                      size={14}
                      className={likedReels[selectedReel.id] ? "text-red-500 fill-current animate-pulse" : "text-white"}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-white/85 font-light">
                    {likeCounts[selectedReel.id]}
                  </span>
                </button>

                {/* Comment Mock Button */}
                <button className="flex flex-col items-center gap-1 group cursor-default">
                  <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white">
                    <MessageSquare size={14} />
                  </div>
                  <span className="text-[9px] font-mono text-white/85 font-light">
                    {(likeCounts[selectedReel.id] / 5).toFixed(0)}
                  </span>
                </button>

                {/* Sparkle badge */}
                <div className="p-2.5 rounded-full bg-black/40 backdrop-blur-sm border border-gold/20 text-[#D4AF37] animate-spin-slow">
                  <Sparkles size={14} />
                </div>
              </div>

              {/* DYNAMIC CAPTIONS & SUBTITLES OVERLAY PANEL */}
              <div className="relative z-10 px-4 pb-4">
                
                {/* Subtitles text container */}
                <div className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-none mb-4 min-h-[60px] flex items-center justify-center text-center animate-fade-in shadow-xl">
                  <p className="font-sans text-xs text-cream tracking-wide font-light leading-relaxed">
                    "{selectedReel.lines[getActiveSubtitleIndex()]}"
                  </p>
                </div>

                {/* Video Info Slogan */}
                <div className="mb-4">
                  <h4 className="font-serif font-light text-sm text-gold tracking-wide leading-tight flex items-center gap-1.5">
                    <span className="text-[10px]">✨</span> {selectedReel.title}
                  </h4>
                  <p className="font-sans text-[10px] text-cream/70 mt-1 line-clamp-2">
                    {selectedReel.sub}
                  </p>
                </div>

                {/* BIG PROMINENT WHATSAPP CTA - ORDERS DIRECT THE ITEM */}
                <a
                  href={`https://wa.me/2347061887939?text=${encodeURIComponent(selectedReel.waPhrase)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-center rounded-none bg-[#D4AF37] hover:bg-white text-black font-display text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 border border-[#D4AF37] transition-all shadow-lg active:scale-98"
                >
                  <MessageSquare size={12} fill="currentColor" />
                  <span>Order This Exact Platter Now</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* Social Follow Actions banner */}
        <div className="max-w-3xl mx-auto p-4 md:p-8 rounded-none bg-[#141414] border border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif font-light text-lg text-white">
              Want to see what's fresh today?
            </h3>
            <p className="font-sans text-xs text-[#888] max-w-md leading-relaxed">
              Follow <strong className="text-gold font-normal">@abachavillage</strong> on Instagram — and tag us when your delicious batch arrives at your door! 🧡
            </p>
          </div>
          
          <a
            href="https://www.instagram.com/abachavillage?igsh=MWJwdHR6Y2kxN244aQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3.5 rounded-none bg-transparent border border-white/20 hover:border-white hover:bg-white hover:text-black font-display font-light text-[10px] uppercase tracking-[0.25em] flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
          >
            <Instagram size={13} fill="currentColor" />
            <span>Follow on Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
