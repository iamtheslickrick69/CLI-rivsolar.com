"use client"

import React, { useState } from 'react';

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
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
        relative h-[400px] md:h-[450px] rounded-[16px] overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-zinc-800
        ${isActive ? 'w-[300px] md:w-[400px]' : 'w-[50px] md:w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'bg-black/40' : 'bg-black/60'}`} />

      {/* Purple gradient overlay for active */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent" />
      )}

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-base md:text-lg font-semibold whitespace-nowrap
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

  return (
    <div className="flex flex-row items-center justify-center gap-2 md:gap-4 overflow-x-auto p-4">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};
