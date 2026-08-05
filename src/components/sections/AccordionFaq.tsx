"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Container, Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type FaqItem = {
  question: string;
  answer: string;
};

export function AccordionFaq({
  title = "Sıkça Sorulan Sorular",
  items,
  theme = "bright",
}: {
  title?: string;
  items: FaqItem[];
  theme?: "bright" | "light-bold" | "white-bold";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section theme={theme} className="py-16 md:py-24">
      <Container>
        <FadeIn className="mb-10">
          <h3>{title}</h3>
        </FadeIn>

        <div className="max-w-3xl divide-y divide-current/20">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <FadeIn key={item.question} delay={index * 0.03}>
                <button
                  type="button"
                  className="w-full py-5 flex items-start justify-between gap-4 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <h4 className="text-xl md:text-2xl pr-4">{item.question}</h4>
                  <span
                    className={cn(
                      "mt-1 text-2xl leading-none transition-transform",
                      open && "rotate-45",
                    )}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 opacity-90 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
