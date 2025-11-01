"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface GridBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  gridSize?: number;
  showRadialGradient?: boolean;
}

export const GridBackground = ({
  className,
  children,
  gridSize = 20,
  showRadialGradient = true,
  ...props
}: GridBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center bg-white dark:bg-black",
        className,
      )}
      {...props}
    >
      {/* Grid Pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial gradient for faded look */}
      {showRadialGradient && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
