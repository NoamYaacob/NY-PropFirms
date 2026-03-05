"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  trigger: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
}

function AccordionEntry({
  item,
  open,
  onToggle,
}: {
  item: AccordionItem;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? contentRef.current.scrollHeight : 0);
    }
  }, [open]);

  return (
    <div
      className="border-b"
      style={{ borderColor: "var(--surface-border)" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-right gap-4 transition-colors rounded-sm hover:bg-[var(--surface-subtle)] px-1"
        aria-expanded={open}
      >
        <span
          className="text-base font-medium text-right flex-1"
          style={{ color: "var(--text-primary)" }}
        >
          {item.trigger}
        </span>
        <ChevronDown
          size={18}
          style={{
            color: "var(--text-secondary)",
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 250ms ease",
          }}
        />
      </button>

      <div
        className="accordion-content"
        style={{ maxHeight: height, opacity: open ? 1 : 0 }}
        aria-hidden={!open}
      >
        <div ref={contentRef} className="pb-5 px-1">
          <div
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  items,
  allowMultiple = true,
  defaultOpen = [],
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(defaultOpen));

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div>
      {items.map((item) => (
        <AccordionEntry
          key={item.id}
          item={item}
          open={openIds.has(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
