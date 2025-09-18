"use client";

export default function CTAButton({
  label = "Get Started",
  onClick,
  variant = "primary",
  size = "md",
}: {
  label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}) {
  const baseClasses = "font-medium transition-all duration-300 relative overflow-hidden group";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-sm rounded-xl",
    lg: "px-8 py-4 text-base rounded-xl",
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:shadow-xl",
    secondary: "bg-background-card border border-border-accent text-brand-primary hover:bg-brand-primary/10",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      <span className="relative z-10">{label}</span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </button>
  );
}
