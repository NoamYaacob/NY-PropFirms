"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { goPath, resolveGoSrc, sanitizeSrc } from "@/lib/affiliate";
import { track } from "@/lib/track";

type Props = {
  ctaId: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function GoLink({ ctaId, className, style, children }: Props) {
  const pathname = usePathname();
  const fallback = sanitizeSrc(ctaId) ?? "unknown";
  const [href, setHref] = useState(goPath(fallback));

  useEffect(() => {
    setHref(goPath(resolveGoSrc(ctaId)));
  }, [ctaId]);

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener"
      className={className}
      style={style}
      onMouseDown={(event) => {
        event.currentTarget.href = goPath(resolveGoSrc(ctaId));
      }}
      onClick={() => {
        track("open_apex_cta_click", { label: fallback, page: pathname });
      }}
    >
      {children}
    </a>
  );
}
