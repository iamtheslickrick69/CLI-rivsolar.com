"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] md:h-[520px] rounded-[16px] overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-gray-200 shadow-lg flex-shrink-0
        ${isActive ? 'w-[280px] md:w-[420px]' : 'w-[50px] md:w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay - reduced for brighter images */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'bg-black/20' : 'bg-black/40'}`} />

      {/* Gradient overlay for active */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      )}

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-base md:text-lg font-semibold whitespace-nowrap uppercase tracking-wider font-[family-name:var(--font-barlow-condensed)]
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

interface ProcessAccordionProps {
  items: AccordionItemData[];
  defaultActive?: number;
}

export const ProcessAccordion: React.FC<ProcessAccordionProps> = ({ items, defaultActive = 2 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);
  const activeItem = items[activeIndex];

  // Calculate fixed width: 4 collapsed (60px) + 1 expanded (420px) + 4 gaps (16px) = 724px on desktop
  return (
    <div className="flex flex-col">
      {/* Accordion Images - Fixed width to prevent layout shift */}
      <div className="flex flex-row items-center justify-start gap-2 md:gap-4 p-4 w-[480px] md:w-[724px] mx-auto overflow-hidden">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Description Area - Fixed height to prevent layout shift */}
      <div className="h-[140px] px-4 mt-4 flex items-start justify-center">
        <AnimatePresence mode="wait">
          {activeItem?.description && (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <h4 className="text-black text-xl md:text-2xl font-semibold mb-3 uppercase tracking-wider font-[family-name:var(--font-barlow-condensed)]">
                {activeItem.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                {activeItem.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
