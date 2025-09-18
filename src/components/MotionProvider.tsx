"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";

function MotionProviderInner({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion();
  return (
    <MotionConfig reducedMotion={shouldReduce ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionProviderInner>{children}</MotionProviderInner>;
}
