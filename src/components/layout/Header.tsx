"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { mainNav, type NavItem } from "@/lib/nav";
import { cn } from "@/lib/cn";

function Logo() {
  return <BrandLogo priority heightClassName="h-12 md:h-[60px]" />;
}

function DesktopFolder({ item }: { item: Extract<NavItem, { type: "folder" }> }) {
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 px-2 py-2 text-sm hover:text-brand-accent transition-colors"
      >
        {item.label}
        <span className="text-[10px] opacity-70" aria-hidden>
          ▾
        </span>
      </Link>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-0 top-full pt-3 min-w-[260px] z-50">
        <div className="bg-brand-black border border-white/10 shadow-xl py-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-4 py-2.5 text-sm hover:bg-white/5 hover:text-brand-accent transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState<Extract<NavItem, { type: "folder" }> | null>(
    null,
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-brand-black text-white border-b border-white/10 overflow-x-clip">
      <div className="container-site flex items-center justify-between py-[6vw] min-[800px]:py-[1vw] gap-3 min-[800px]:gap-4">
        <Logo />

        <nav
          className="hidden min-[800px]:flex items-center gap-0.5 xl:gap-1 flex-1 justify-end min-w-0"
          aria-label="Ana menü"
        >
          {mainNav.map((item) =>
            item.type === "folder" ? (
              <DesktopFolder key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-2 text-sm hover:text-brand-accent transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}
          <div className="ml-3">
            <Button href="/contact" className="!py-3 !px-5 !text-sm">
              İletişime geçin
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className="min-[800px]:hidden inline-flex flex-col justify-center gap-1.5 w-10 h-10"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v);
            setFolder(null);
          }}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-transform origin-center",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-opacity",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-white transition-transform origin-center",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="min-[800px]:hidden fixed inset-0 top-[calc(30px+12vw)] bg-brand-black z-40 overflow-y-auto"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="container-site py-8">
              {!folder ? (
                <ul className="space-y-1">
                  {mainNav.map((item) => (
                    <li key={item.label}>
                      {item.type === "folder" ? (
                        <button
                          type="button"
                          className="w-full text-left py-3 text-xl font-[family-name:var(--font-heading)] italic capitalize"
                          onClick={() => setFolder(item)}
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-3 text-xl font-[family-name:var(--font-heading)] italic capitalize"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                  <li className="pt-6">
                    <Button href="/contact">İletişime geçin</Button>
                  </li>
                </ul>
              ) : (
                <div>
                  <button
                    type="button"
                    className="mb-6 text-sm uppercase tracking-widest opacity-80"
                    onClick={() => setFolder(null)}
                  >
                    ← Geri
                  </button>
                  <p className="eyebrow mb-4">{folder.label}</p>
                  <ul className="space-y-1">
                    {folder.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-3 text-lg"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
