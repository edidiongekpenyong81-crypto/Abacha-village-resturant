import React, { useState } from "react";
import { Phone, MessageSquare, Mail, MapPin, Search, ChevronRight, HelpCircle, AlertCircle } from "lucide-react";
import { DeliveryZone } from "../types";

export default function ContactSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const contactMethods = [
    {
      label: "Support Line",
      value: "0806 074 9239",
      sub: "Available for calls & sms",
      href: "tel:08060749239",
      icon: <Phone size={20} className="text-gold" />,
    },
    {
      label: "Direct WhatsApp chat",
      value: "Chat on WhatsApp",
      sub: "Reply time under 2 mins",
      href: "https://wa.me/2347061887939?text=Hi%20Abacha%20Village!%20I'd%20like%20to%20place%20an%20order%20and%20verify%20delivery.",
      icon: <MessageSquare size={20} className="text-green-500" fill="currentColor" />,
    },
    {
      label: "Official email",
      value: "villageabacha@gmail.com",
      sub: "Catering & partnership plans",
      href: "mailto:villageabacha@gmail.com",
      icon: <Mail size={20} className="text-[#3B8E3B]" />,
    },
    {
      label: "Central Hub",
      value: "Abuja, Nigeria",
      sub: "FCT Dispatch HQ Center",
      href: "#",
      icon: <MapPin size={20} className="text-red-500" />,
    },
  ];

  const deliveryZones: DeliveryZone[] = [
    {
      zone: "City Centre",
      areas: ["Wuse 1", "Wuse 2", "Garki 1", "Garki 2", "Maitama", "Asokoro", "Central Business District (CBD)"],
    },
    {
      zone: "Mid-City Zones",
      areas: ["Utako", "Jabi", "Life Camp", "Gudu", "Kado", "Wuye", "Durumi"],
    },
    {
      zone: "Satellite Towns",
      areas: ["Gwarinpa Estate", "Kubwa", "Lugbe", "Karu", "Nyanya", "Lokogoma", "Apo Resettlement"],
    },
  ];

  const faqs = [
    {
      q: "How fast is same-day delivery?",
      a: "Orders placed during our dispatch hours (Mon-Sat 9am-6pm) are prepared fresh and generally arrive in 45-60 minutes depending on your precise distance from Wuse CBD dispatch hub.",
    },
    {
      q: "Can I customize spice/pepper intensity?",
      a: "Absolutely! We customize every order. Just state whether you want Classic, Mild-Spicy, or Fiery-Eastern hot when you order via WhatsApp.",
    },
    {
      q: "How does event catering logistics work?",
      a: "We deliver event orders fully portioned in insulated thermal cooler cases. On-site chafing warmers and uniformed servers can be added during inquiry.",
    },
  ];

  // Search/filter delivery neighborhoods
  const filteredZones = deliveryZones.map((z) => {
    const matchingAreas = z.areas.filter((area) =>
      area.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...z, areas: matchingAreas };
  }).filter((z) => z.areas.length > 0);

  return (
    <section className="bg-[#0C0C0C] text-cream py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-display text-[9px] tracking-[0.4em] text-gold uppercase block mb-3">
            Central Dispatch Support
          </span>
          <h1 className="font-serif font-extralight text-3xl sm:text-5xl text-white tracking-wide">
            Get in Touch
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#888] mt-3 font-light leading-relaxed">
            Have questions about standard deliveries, custom spices, or party dates? Reach out via any portal. Our dispatch crew is always happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Contact portal cards & Operating hours */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Quick Portals Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((m, idx) => (
                <a
                  key={idx}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-5 rounded-none bg-[#141414] border border-white/10 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group"
                >
                  <div className="p-3 rounded-none bg-white/[0.02] border border-white/10 w-fit mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                    {m.icon}
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-display tracking-[0.2em] text-[#666] block mb-1">
                      {m.label}
                    </span>
                    <strong className="text-sm font-serif font-light text-white group-hover:text-gold transition-colors block leading-tight">
                      {m.value}
                    </strong>
                    <span className="text-xs text-[#888] block mt-1 font-light">
                      {m.sub}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Operating hours table */}
            <div className="p-6 rounded-none bg-[#141414] border border-white/10">
              <h3 className="font-display text-[10px] uppercase text-gold mb-5 tracking-[0.25em]">
                Kitchen Dispatch Hours
              </h3>
              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between pb-2 border-b border-white/10">
                  <span className="text-[#888] font-light">Monday – Friday</span>
                  <span className="text-white font-light">9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-white/10 font-medium">
                  <span className="text-gold font-light">Saturday (Fresh Bazaar)</span>
                  <span className="text-gold font-light">8:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#888] font-light">Sunday (Family Portions)</span>
                  <span className="text-white font-light">10:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive search directory for Abuja areas */}
          <div className="lg:col-span-6 bg-[#141414] p-6 sm:p-8 rounded-none border border-white/10 shadow-2xl" id="delivery-areas">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-serif font-light text-xl text-white tracking-wide">
                  Coverage Neighborhoods
                </h3>
                <p className="text-xs text-[#888] mt-1 font-light">Enter your Abuja estate to confirm dispatch feasibility.</p>
              </div>

              {/* Search input field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Life Camp"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-black/40 border border-white/10 rounded-none pl-9 pr-4 py-2.5 text-xs text-cream focus:border-[#D4AF37] focus:outline-none w-full sm:w-48 placeholder-[#555]"
                />
                <Search size={13} className="text-[#555] absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Delivery zone map directory results */}
            <div className="space-y-6">
              {filteredZones.length > 0 ? (
                filteredZones.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-none bg-black/40 border border-white/10">
                    <span className="text-[10px] font-display uppercase text-gold tracking-[0.2em] block mb-3">
                      📍 {item.zone}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {item.areas.map((area, areaIdx) => (
                        <span
                          key={areaIdx}
                          className="px-2.5 py-1 text-xs rounded-none bg-[#1C1C1C] text-cream/80 border border-white/5 flex items-center gap-1 font-light"
                        >
                          <span>{area}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center bg-black/40 border border-[#D4AF37]/30 text-xs text-[#D4AF37]">
                  <AlertCircle size={18} className="mx-auto mb-2 opacity-80" />
                  No direct listing found. Drop us a WhatsApp line! We likely still deliver to your area with special logistics arrangements.
                </div>
              )}
            </div>

            {/* Fallback reassurance note */}
            <p className="text-[11px] text-[#666] mt-4 leading-relaxed italic font-light">
              *Your Abuja layout isn't featured above? No issues! Direct message our team on WhatsApp, we coordinate private dispatch vehicles across almost all outskirts.*
            </p>

          </div>

        </div>

        {/* Freq. asked questions accordion visual */}
        <div className="border-t border-white/10 pt-16">
          <div className="text-center mb-10">
            <h3 className="font-serif font-extralight text-xl text-white tracking-wide">FAQs & Kitchen Guidelines</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-none bg-[#141414] border border-white/10">
                <div className="flex gap-2 items-start mb-3">
                  <HelpCircle size={14} className="text-gold shrink-0 mt-0.5" />
                  <h4 className="font-sans font-medium text-xs uppercase tracking-wider text-cream">{faq.q}</h4>
                </div>
                <p className="font-sans text-xs text-[#888] leading-relaxed font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
