"use client";

export function AccentBadge({ label = "AI Innovation" }: { label?: string }) {
  return (
    <span className="inline-block rounded-full px-3 py-1 text-sm font-medium text-text-primary bg-background.subtle ring-1 ring-white/10">
      <span className="bg-gradient-to-r from-brand.primary to-brand.secondary bg-clip-text text-transparent">
        {label}
      </span>
    </span>
  );
}
