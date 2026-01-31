"use client"

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, ArrowRight } from "lucide-react";

interface ProcessItem {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
  duration?: string;
}

interface ProcessImageGalleryProps {
  items: ProcessItem[];
  onItemHover?: (item: ProcessItem) => void;
}

export function ProcessImageGallery({ items }: ProcessImageGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<ProcessItem | null>(null);

  return (
    <>
      {/* Fixed Equal Width Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 w-full">
        {items.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="relative group rounded-2xl overflow-hidden cursor-pointer border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[3/4]"
          >
            {/* Background Image */}
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 20vw"
              quality={90}
              priority={idx < 3}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Step Number */}
            <div className="absolute top-3 left-3">
              <span className="bg-white text-black text-xs font-bold px-2.5 py-1 rounded-full font-[family-name:var(--font-barlow-condensed)]">
                0{idx + 1}
              </span>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-sm md:text-base font-semibold uppercase tracking-wider font-[family-name:var(--font-barlow-condensed)] drop-shadow-lg">
                {item.title}
              </h3>
              {item.duration && (
                <p className="text-white/70 text-xs mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.duration}
                </p>
              )}
            </div>

            {/* Hover indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                <ArrowRight className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors shadow-lg"
              >
                <X className="w-5 h-5 text-gray-700" />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Step badge on image */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black text-sm font-bold px-3 py-1.5 rounded-full font-[family-name:var(--font-barlow-condensed)]">
                    Step 0{selectedItem.id}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-black uppercase tracking-tight font-[family-name:var(--font-barlow-condensed)]">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.duration && (
                    <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {selectedItem.duration}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-all uppercase tracking-wider text-sm font-[family-name:var(--font-barlow-condensed)]"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold uppercase tracking-wider text-sm font-[family-name:var(--font-barlow-condensed)] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
