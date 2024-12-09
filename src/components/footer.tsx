"use client";

import AnimatedDock from "./dock";
import { DockItems } from "./hero-footer";
import SplitText from "./ui/split-word";

export function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <AnimatedDock items={DockItems} />
      <SplitText text="SAMYAM" />
      <div>&copy;Samyam Katwal {new Date().getFullYear()} </div>
    </div>
  );
}
