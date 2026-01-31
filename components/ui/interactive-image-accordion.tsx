"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
  duration?: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  index: number;
  isActive: boolean;
  isVisited: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, index, isActive, isVisited, onMouseEnter }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative h-[450px] md:h-[520px] rounded-[16px] overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out border border-gray-200 shadow-lg flex-shrink-0
        ${isActive ? 'w-[280px] md:w-[420px]' : isHovered ? 'w-[70px] md:w-[85px]' : 'w-[50px] md:w-[60px]'}
      `}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay - reduced for brighter images */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isActive ? 'bg-black/20' : 'bg-black/40'}`} />

      {/* Gradient overlay for active */}
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      )}

      {/* Step Number Badge - visible when collapsed */}
      {!isActive && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <div className={`
            w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold
            transition-all duration-300
            ${isVisited ? 'bg-green-500 text-white' : 'bg-white text-black'}
          `}>
            {isVisited ? <Check className="w-4 h-4" /> : index + 1}
          </div>
        </div>
      )}

      {/* Step Number + Duration Badge - visible when active */}
      {isActive && (
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
            ${isVisited ? 'bg-green-500 text-white' : 'bg-white text-black'}
          `}>
            {isVisited ? <Check className="w-4 h-4" /> : index + 1}
          </div>
          {item.duration && (
            <span className="bg-white/90 backdrop-blur-sm text-black text-xs font-semibold px-3 py-1 rounded-full">
              {item.duration}
            </span>
          )}
        </div>
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

// Mobile Card Component
const MobileCard: React.FC<{ item: AccordionItemData }> = ({ item }) => {
  return (
    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xl font-semibold uppercase tracking-wider font-[family-name:var(--font-barlow-condensed)]">
        {item.title}
      </span>
    </div>
  );
};

interface ProcessAccordionProps {
  items: AccordionItemData[];
  defaultActive?: number;
}

export const ProcessAccordion: React.FC<ProcessAccordionProps> = ({ items, defaultActive = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive);
  const [visitedSteps, setVisitedSteps] = useState<Set<number>>(new Set([defaultActive]));
  const activeItem = items[activeIndex];

  const handleStepChange = (index: number) => {
    setActiveIndex(index);
    setVisitedSteps(prev => new Set([...prev, index]));
  };

  const goNext = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    handleStepChange(nextIndex);
  };
  const goPrev = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    handleStepChange(prevIndex);
  };

  return (
    <div className="flex flex-col">
      {/* Mobile: Swipeable single card view */}
      <div className="md:hidden px-4">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <MobileCard item={activeItem} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Dots indicator with step numbers */}
        <div className="flex items-center justify-center gap-3 mt-4">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleStepChange(index)}
              className={`
                w-8 h-8 rounded-full transition-all flex items-center justify-center text-sm font-bold
                ${index === activeIndex
                  ? 'bg-black text-white scale-110'
                  : visitedSteps.has(index)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }
              `}
            >
              {visitedSteps.has(index) && index !== activeIndex ? <Check className="w-4 h-4" /> : index + 1}
            </button>
          ))}
        </div>
        {/* Mobile duration badge */}
        {activeItem?.duration && (
          <div className="flex justify-center mt-3">
            <span className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full">
              {activeItem.duration}
            </span>
          </div>
        )}
      </div>

      {/* Desktop: Original accordion layout */}
      <div className="hidden md:flex flex-row items-center justify-start gap-4 p-4 w-[724px] mx-auto overflow-hidden">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            index={index}
            isActive={index === activeIndex}
            isVisited={visitedSteps.has(index)}
            onMouseEnter={() => handleStepChange(index)}
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

      {/* Timeline Progress Bar */}
      <div className="hidden md:block px-4 mt-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Background track */}
            <div className="h-1 bg-gray-200 rounded-full" />
            {/* Progress fill */}
            <motion.div
              className="absolute top-0 left-0 h-1 bg-black rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${((activeIndex + 1) / items.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
            {/* Step markers */}
            <div className="absolute top-0 left-0 right-0 flex justify-between -translate-y-[3px]">
              {items.map((_, index) => (
                <div
                  key={index}
                  className={`
                    w-2.5 h-2.5 rounded-full transition-all duration-300
                    ${index <= activeIndex ? 'bg-black' : 'bg-gray-300'}
                  `}
                />
              ))}
            </div>
          </div>
          {/* Timeline labels */}
          <div className="flex justify-between mt-3 text-xs text-gray-500">
            <span>Start</span>
            <span className="font-medium text-black">4-8 Weeks Total</span>
            <span>Savings</span>
          </div>
        </div>
      </div>
    </div>
  );
};
