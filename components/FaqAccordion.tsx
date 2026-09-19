import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={`item-${index}`} value={`item-${index}`} className="border-b border-line">
          <AccordionTrigger className="py-5 text-left font-sans text-[15px] font-semibold hover:text-oxide">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 pt-2 text-[15px] leading-relaxed text-mist">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
