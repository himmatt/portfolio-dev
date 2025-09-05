import React, { forwardRef } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/utils/cn";

export const InteractiveHoverButton = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // base styles
          "group relative flex z-[1] w-auto cursor-pointer overflow-hidden rounded-lg border p-2 px-4 text-center font-semibold transition-colors duration-300",
          // initial state
          "bg-black text-white border-grey",
          // hover invert
          "hover:bg-white hover:text-black hover:border-white",
          className
        )}
        {...props}
      >
        {/* Left dot + text */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>

        {/* Hover overlay with arrow */}
        <div className="absolute top-0 z-[2] flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
          <span>{children}</span>
          <ArrowDown />
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
