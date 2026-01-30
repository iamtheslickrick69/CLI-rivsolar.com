"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

interface AccordionItemData {
  id: string
  title: string
  content: string
  image: string
}

interface Accordion03Props {
  items: AccordionItemData[]
  className?: string
}

function Accordion03({ items, className }: Accordion03Props) {
  return (
    <div className={`border border-gray-200 rounded-[16px] overflow-hidden shadow-sm ${className || ""}`}>
      <Accordion type="single" collapsible className="w-full" defaultValue={items[0]?.id}>
        {items.map((item, index) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className={`border-gray-200 px-8 ${index === items.length - 1 ? "border-b-0" : ""}`}
          >
            <AccordionTrigger className="text-left text-black hover:no-underline py-6 text-xl md:text-2xl font-semibold [&[data-state=open]]:text-black [&>svg]:hidden">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left side - Text content */}
                <div className="md:w-2/5 flex flex-col">
                  <p className="text-base md:text-lg leading-relaxed mb-6">{item.content}</p>
                  <Button
                    variant="outline"
                    className="w-fit bg-black hover:bg-gray-800 text-white border-0 rounded-[8px] px-6 py-2 font-medium"
                  >
                    View More
                  </Button>
                </div>
                {/* Right side - Image */}
                <div className="md:w-3/5 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover rounded-[12px]"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export { Accordion03 }
