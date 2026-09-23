"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/content";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/components/ui/icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointerDown(e: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const linkedInAriaLabel = `Visit ${profile.name} on LinkedIn`;

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[1240px]">
        <nav
          className="flex h-16 items-center justify-between rounded-[20px] border border-hairline bg-surface/90 px-5 shadow-[var(--card-shadow)] backdrop-blur-md sm:px-7"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="flex items-center gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline-strong bg-surface text-sm font-semibold tracking-wide text-accent">
              SA
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-fg sm:inline">
              Sajid Ali
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = isLinkActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
                      isActive
                        ? "bg-accent-3 font-medium text-accent after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-5 after:-translate-x-1/2 after:rounded-full after:bg-accent after:content-['']"
                        : "text-fg-muted hover:bg-surface-2 hover:text-fg"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <span aria-hidden="true" className="h-6 w-px bg-hairline" />
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={linkedInAriaLabel}
              className="inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
              LinkedIn
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-fg lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {open ? (
          <div
            id="mobile-menu"
            className="mt-2 rounded-[20px] border border-hairline bg-surface/95 px-4 pb-4 pt-2 shadow-[var(--card-shadow)] backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "block rounded-lg px-3 py-3 text-base transition-colors",
                        isActive
                          ? "bg-accent-3 font-medium text-accent"
                          : "text-fg-muted hover:bg-surface-2 hover:text-fg"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedInAriaLabel}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-hairline-strong bg-surface px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
                LinkedIn
              </a>
              <ThemeToggle className="h-11 w-11" />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
