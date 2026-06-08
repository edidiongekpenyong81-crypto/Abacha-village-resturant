import React, { useState } from "react";
import { Check, Calendar, Users, Home, Phone, Star, ClipboardCheck, MessageSquare, Upload } from "lucide-react";
import { CateringEvent, CateringBenefit } from "../types";
import { useCustomImages } from "../context/CustomImageContext";

export default function CateringSection() {
  const { images, updateImage, isEditingSession } = useCustomImages();
  const cateringImage = images.catering;

  const eventTypes: CateringEvent[] = [
    {
      id: "owambe",
      title: "Owambe & Parties",
      description: "Big traditional energy and generous pots — we keep your wedding or birthday guests fully fed and happy.",
      emoji: "🎉",
    },
    {
      id: "naming",
      title: "Naming Ceremonies",
      description: "Celebrate precious new life with premium food that honors your cultural lineage and roots.",
      emoji: "👶",
    },
    {
      id: "burials",
      title: "Burials & Receptions",
      description: "Dignified, highly coordinated, respectful catering during emotional milestones so you can focus on family.",
      emoji: "⚫",
    },
    {
      id: "corporate",
      title: "Corporate & Office Co-working",
      description: "Professional aesthetics, punctual hot delivery, and hearty lunches your colleagues will talk about all quarter.",
      emoji: "🏢",
    },
    {
      id: "graduations",
      title: "Graduations & Milestones",
      description: "Mark rigorous educational milestones with a savory traditional banquet that matches your family's joy.",
      emoji: "🎓",
    },
    {
      id: "religious",
      title: "Religious Gatherings",
      description: "Feeding community members with standard, humble ingredients cooked with sanitary hygiene and respect.",
      emoji: "🕌",
    },
  ];

  const benefits: CateringBenefit[] = [
    {
      id: "fresh",
      title: "Cooked fresh on the day",
      description: "Every order is mixed on the morning of your event. Never reheated, never stale.",
    },
    {
      id: "size",
      title: "Scale from 25 to 500 Guests",
      description: "No gathering is too micro or too mega. Our crew is calibrated for large-pot batches.",
    },
    {
      id: "delivery",
      title: "Venue Dropoff Across Abuja",
      description: "Packed safely inside heavy-duty isothermal coolers to preserve warmth across transit.",
    },
    {
      id: "setup",
      title: "On-site Servers Available",
      description: "Choose our uniformed waiters to coordinate serving, table settings, and guest dishes cleanly.",
    },
    {
      id: "payment",
      title: "Flexible Payment Options",
      description: "Lock down your date with a standard deposit, secure the rest when we pack your food.",
    },
    {
      id: "custom",
      title: "Customizable Trimmings",
      description: "Cater to food allergies, spice profiles, or extra dry fish/ponmo levels based on your preferences.",
    },
  ];

  // Booking Form States
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    purpose: "Event Catering",
    address: "",
    eventDate: "",
    guestCount: "",
    specialRequests: "",
    contactPreference: "WhatsApp",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<any | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate database network ping for 1 second
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      // Clear inputs
      setFormData({
        name: "",
        phone: "",
        purpose: "Event Catering",
        address: "",
        eventDate: "",
        guestCount: "",
        specialRequests: "",
        contactPreference: "WhatsApp",
      });
    }, 1000);
  };

  const triggerWhatsAppCatering = () => {
    const text = encodeURIComponent(
      "Hi Abacha Village! I'd like to get a catering quote for my upcoming event. Please let me know what information you need."
    );
    window.open(`https://wa.me/2347061887939?text=${text}`, "_blank", "noopener,noreferrer");
  };

  // Check if current selection requires conditional inputs
  const showCateringDetails = formData.purpose === "Event Catering" || formData.purpose === "Both";

  return (
    <section className="bg-[#0C0C0C] text-cream py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Banner Section Header */}
        <div className="relative rounded-none overflow-hidden border border-white/10 mb-20 group bg-[#141414] p-2">
          <div className="relative w-full h-[60vh] sm:h-[50vh] overflow-hidden">
            <img
              src={cateringImage}
              alt="Abacha Village event buffet platter display"
              className="w-full h-full object-cover opacity-25 object-center scale-102 group-hover:scale-105 duration-700"
              referrerPolicy="no-referrer"
            />

            {isEditingSession && (
              <div className="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center p-4">
                <div className="p-6 border border-dashed border-[#D4AF37]/50 bg-black/60 text-center max-w-sm">
                  <Upload className="text-[#D4AF37] mx-auto mb-3" size={24} />
                  <span className="font-serif text-sm text-white block mb-1">Catering Showcase Banner</span>
                  <p className="font-sans text-[10px] text-[#888] mb-4">Recommended luxury table setup photograph</p>
                  <label className="inline-block px-5 py-2.5 bg-[#D4AF37] hover:bg-white text-black font-display text-[9px] uppercase tracking-[0.2em] font-medium cursor-pointer transition-colors">
                    Upload
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          await updateImage("catering", file);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            )}

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent z-10 p-8 sm:p-12 pt-32">
              <span className="font-display text-[9px] tracking-[0.4em] text-gold uppercase mb-3 block">
                Traditional Catering Crew
              </span>
              <h1 className="font-serif font-extralight text-3xl sm:text-5xl text-white leading-tight tracking-wide">
                From Owambe to Office Lunch —<br />We've Got Your Event Covered
              </h1>
              <p className="font-sans text-xs sm:text-sm text-[#888] max-w-2xl mt-4 font-light leading-relaxed">
                Whether you are hosting 20 close friends or feeding 500 corporate attendees across Abuja, Abacha Village scales with cultural authenticity, premium ingredients, and pristine hygiene.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Event types cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif font-extralight text-2xl sm:text-3xl text-white tracking-wide">
              Selected Gatherings We Accompany
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#888] mt-2 font-light">
              Tailored traditional menus designed to make every landmark milestone taste like hometown.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((evt) => (
              <div
                key={evt.id}
                className="p-6 rounded-none bg-[#141414] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex items-start gap-4 p-5"
              >
                <div className="p-3 text-2xl shrink-0 rounded-none bg-white/[0.02] border border-white/10">
                  {evt.emoji}
                </div>
                <div>
                  <h3 className="font-serif font-light text-base text-white mb-2">{evt.title}</h3>
                  <p className="font-sans text-xs text-[#888] font-light leading-relaxed">{evt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits checklists & Pull Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Checklist side */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif font-extralight text-2xl sm:text-3xl text-white tracking-wide">
                Our Non-Negotiable Quality Safeguards
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#888] mt-1">
                Why wedding planners and families across the FCT trust Abacha Village:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((bene) => (
                <div key={bene.id} className="flex gap-4">
                  <span className="p-1 rounded-none bg-[#141414] text-[#D4AF37] border border-white/10 shrink-0 h-7 w-7 flex items-center justify-center">
                    <Check size={13} className="stroke-[2.5]" />
                  </span>
                  <div>
                    <h4 className="font-display font-light text-[10px] text-gold uppercase tracking-[0.2em]">{bene.title}</h4>
                    <p className="font-sans text-xs text-[#888] font-light mt-1 leading-relaxed">{bene.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pull Quote Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-none bg-[#141414] border border-[#D4AF37]/30 relative p-6">
              {/* Stars rating */}
              <div className="flex gap-1 mb-4 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <blockquote className="font-sans text-sm text-[#888] italic leading-relaxed">
                "From booking to the last plate, everything was seamless. They handled our burial reception in Kubwa for over 150 guests and not one person complained about the food. Truly authentic ugba mix."
              </blockquote>
              <div className="mt-4 flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gold" />
                <span className="text-[10px] font-display font-light text-gold uppercase tracking-[0.25em]">
                  Obinna C., Kubwa
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* CATERING CTA AND BOOKING INQUIRY FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="quote-form">
          
          {/* WhatsApp Direct quote promo */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="p-8 rounded-none bg-[#141414] border border-white/10 text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/10 text-[9px] text-[#A3A3A3] font-display uppercase tracking-[0.3em] rounded-none mb-4">
                ⭐ Instant Quoting
              </span>
              <h3 className="font-serif font-extralight text-2xl text-white tracking-wide leading-tight">
                Want a Quote in Under 10 Mins?
              </h3>
              <p className="font-sans text-xs text-[#888] leading-relaxed mt-4">
                No forms, no waiting. Tap the button to message our head of catering directly. We will iron out custom portion settings, dried fish cuts, and deliver an estimate.
              </p>
              
              <button
                onClick={triggerWhatsAppCatering}
                className="w-full mt-6 py-4 rounded-none font-display text-[10px] uppercase tracking-[0.3em] bg-transparent hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 cursor-pointer"
              >
                <span>Chat on WhatsApp now</span>
              </button>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-none bg-[#141414] border border-white/10 shadow-2xl">
              
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <ClipboardCheck className="text-gold" size={18} />
                <div>
                  <h3 className="font-display text-[10px] uppercase text-gold tracking-[0.2em]">
                    Prefer a written form?
                  </h3>
                  <p className="text-[11px] text-[#666] mt-0.5 uppercase tracking-wider font-light">Fill in event details below.</p>
                </div>
              </div>

              {submittedData ? (
                /* Success screen display */
                <div className="p-6 rounded-none bg-black/40 border border-[#D4AF37]/40 text-center animate-fade-in space-y-4">
                  <div className="h-10 w-10 border border-gold/40 text-[#D4AF37] flex items-center justify-center mx-auto text-sm rotate-45">
                    <span className="-rotate-45">✓</span>
                  </div>
                  <h4 className="font-serif font-light text-lg text-white">We've Received Your Details!</h4>
                  <p className="font-sans text-xs text-[#888] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-gold font-normal">{submittedData.name}</strong>. We've logged your request for <span className="font-semibold text-cream">{submittedData.purpose}</span> at <strong className="font-normal text-gold">{submittedData.address}</strong>.
                  </p>
                  
                  {submittedData.eventDate && (
                    <div className="p-3 bg-black/60 rounded-none inline-block text-xs font-mono border border-white/10 text-cream/70">
                      📅 Date: {submittedData.eventDate} | 👥 Guests: {submittedData.guestCount}
                    </div>
                  )}

                  <p className="text-[11px] text-[#666] uppercase tracking-wider leading-none pt-2 block">
                    *Expect a WhatsApp check-in from our event coordinator shortly.*
                  </p>

                  <button
                    onClick={() => setSubmittedData(null)}
                    className="px-5 py-2.5 bg-transparent border border-white/10 text-[9px] uppercase tracking-[0.2em] rounded-none hover:bg-white hover:text-black text-[#999] transition-all font-display block mx-auto cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                /* The operational Form */
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-display uppercase text-[#999] tracking-[0.2em] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Adaeze Madu"
                        className="w-full bg-black/40 border border-white/10 rounded-none px-3 py-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[10px] font-display uppercase text-[#999] tracking-[0.2em] mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="0803 241 1234"
                        className="w-full bg-black/40 border border-white/10 rounded-none px-3 py-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Ordering Purpose */}
                  <div>
                    <label className="block text-[10px] font-display uppercase text-[#999] tracking-[0.2em] mb-1.5">
                      What are you ordering for?
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-none px-3 py-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                    >
                      <option value="Event Catering">Event Catering (Corporate/Owambe/Funeral)</option>
                      <option value="Individual Order">Just a Personal Order (Same-Day Box)</option>
                      <option value="Both">I Need Both (Catering Quote + Daily Plates)</option>
                      <option value="Not Sure">Not Sure/General Inquiry</option>
                    </select>
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label className="block text-[10px] font-display uppercase text-[#999] tracking-[0.2em] mb-1.5">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g. Plot 15, Gwarinpa Estate, Abuja"
                      className="w-full bg-black/40 border border-white/10 rounded-none px-3 py-2.5 text-xs text-cream focus:border-gold focus:outline-none"
                    />
                  </div>

                  {/* Conditional Event Details (Shown only for event/catering orders) */}
                  {showCateringDetails && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-white/[0.01] rounded-none border border-white/10 animate-fade-in">
                      {/* Date */}
                      <div>
                        <label className="block text-[9px] font-display uppercase text-gold tracking-[0.2em] mb-1.5">
                          When is your event?
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          required={showCateringDetails}
                          className="w-full bg-black/40 border border-white/10 rounded-none px-3 py-2.5 text-xs text-cream focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>

                      {/* Guest count */}
                      <div>
                        <label className="block text-[9px] font-display uppercase text-gold tracking-[0.2em] mb-1.5">
                          Number of Guests
                        </label>
                        <input
                          type="number"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleInputChange}
                          required={showCateringDetails}
                          placeholder="150"
                          min="10"
                          className="w-full bg-black/40 border border-white/10 rounded-none px-3 py-2.5 text-xs text-cream focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Special Requests */}
                  <div>
                    <label className="block text-[10px] font-display uppercase text-[#999] tracking-[0.2em] mb-1.5">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Extra shredded garden egg leaves, soft ponmo portions, custom spice levels..."
                      className="w-full bg-black/40 border border-white/10 rounded-none p-3 text-xs text-cream focus:border-gold focus:outline-none"
                    />
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <label className="block text-[10px] font-display uppercase text-[#999] tracking-[0.2em] mb-2">
                      Reach Preference
                    </label>
                    <div className="flex gap-6">
                      {["WhatsApp", "Phone Call", "Either"].map((pref) => (
                        <label key={pref} className="flex items-center gap-2 cursor-pointer text-xs font-display text-[#888] uppercase tracking-wider text-[10px]">
                          <input
                            type="radio"
                            name="contactPreference"
                            value={pref}
                            checked={formData.contactPreference === pref}
                            onChange={handleInputChange}
                            className="accent-gold h-4 w-4"
                          />
                          <span>{pref}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-none font-display text-[10px] uppercase tracking-[0.25em] bg-[#D4AF37] text-black hover:bg-white hover:text-black transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING DETAILS...</span>
                    ) : (
                      <>
                        <span>PLACE REQUEST / SECURE QUOTE</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-[#666] text-center leading-relaxed font-light">
                    *Our team is already reviewing. Expect a priority WhatsApp follow-up shortly.*
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
