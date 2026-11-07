"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { buildWhatsAppUrl } from "./content";

type Ctx = {
  selected: string[];
  toggle: (id: string) => void;
  isSelected: (id: string) => boolean;
  waUrl: (intent?: "talk" | "online") => string;
};

const ConcernsContext = createContext<Ctx | null>(null);

/**
 * Remembers which worries the parent tapped in the hero or the signs grid,
 * so every WhatsApp button on the page carries them into the message.
 */
export function ConcernsProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = useCallback((id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      selected,
      toggle,
      isSelected: (id) => selected.includes(id),
      waUrl: (intent = "talk") => buildWhatsAppUrl(selected, intent),
    }),
    [selected, toggle]
  );

  return <ConcernsContext.Provider value={value}>{children}</ConcernsContext.Provider>;
}

export function useConcerns() {
  const ctx = useContext(ConcernsContext);
  if (!ctx) throw new Error("useConcerns must be used inside ConcernsProvider");
  return ctx;
}
