"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string; // <-- added optional href
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-block font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 focus:ring-accent",
    secondary:
      "bg-primary text-white border border-gray-600 hover:border-accent hover:text-accent focus:ring-accent",
    outline:
      "border border-accent text-accent bg-transparent hover:bg-accent hover:text-primary focus:ring-accent",
    ghost: "bg-transparent text-white hover:text-accent focus:ring-accent",
    accent: "bg-yellow-500 text-primary hover:bg-yellow-600 focus:ring-yellow-500",
  };

  // If href exists, render a Link
  if (href) {
    return (
      <Link href={href} className={clsx(baseStyles, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  // Otherwise, render a normal button
  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}