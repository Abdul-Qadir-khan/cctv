"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "dark";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-black",

    secondary:
      "bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:ring-gray-300",

    outline:
      "border border-black text-black bg-transparent hover:bg-black hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 focus:ring-black",

    ghost:
      "bg-transparent text-black hover:bg-gray-100 hover:shadow-sm focus:ring-gray-300",

    dark:
      "bg-gray-900 text-white hover:bg-black shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-gray-900",
  };

  const classes = clsx(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}