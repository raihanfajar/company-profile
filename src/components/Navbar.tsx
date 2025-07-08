"use client";

import { lato } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const linkClass = `relative hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-current hover:after:transition-all`;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ease-in-out ${
        scrolled
          ? "bg-[#a8bdbf] text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 md:h-20 md:w-20">
            <Image src="/logo.png" alt="Logo Picture" fill objectFit="cover" />
          </div>
          <p
            className={`text-xl font-bold md:text-2xl ${lato.className} ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            GreenStride
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className={`${linkClass} font-semibold`}>
            About Us
          </Link>
          <Link href="/teams" className={`${linkClass} font-semibold`}>
            Teams
          </Link>
          <Link href="/blog" className={`${linkClass} font-semibold`}>
            Blog List
          </Link>
          {user ? (
            <>
              <Link href="/write"className={`${linkClass} font-semibold`}>
                Write
              </Link>
              <Button variant="destructive" onClick={clearAuth}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/sign-in" className={`${linkClass} font-semibold`}>
                Sign In
              </Link>
              <Link href="/sign-up" className={`${linkClass} font-semibold`}>
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 text-3xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 z-40 h-full w-1/2 bg-[#a8bdbf] shadow-lg transition-transform duration-300 ease-in-out md:hidden backdrop-blur-sm`}
        >
          <div className="flex flex-col gap-6 p-6 pt-20 text-black">
            <Link
              href="/"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/teams"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Teams
            </Link>
            <Link
              href="/blog"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Blog List
            </Link>
            {user ? (
              <>
                <Link
                  href="/write"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Write
                </Link>
                <Button
                  variant="destructive"
                  onClick={() => {
                    clearAuth();
                    setMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
