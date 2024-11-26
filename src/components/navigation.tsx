"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/specials", label: "Specials" },
  ];

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center px-4">
        <h1 className="text-2xl font-bold">Knowledge Exchange</h1>
        <nav className="ml-8 flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative transition-colors hover:text-foreground/80",
                pathname === link.href ? "text-foreground" : "text-foreground/60"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 top-full h-[2px] w-full bg-foreground"
                />
              )}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 
