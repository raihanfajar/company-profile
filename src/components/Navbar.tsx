"use client";
import { lato } from "@/lib/fonts";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useState, useEffect } from "react"; // Import useState dan useEffect

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();
  const [scrolled, setScrolled] = useState(false); // State untuk status scroll

  useEffect(() => {
    const handleScroll = () => {
      // Jika posisi scroll lebih dari 20 (atau angka lain sesuaikan), set 'scrolled' jadi true
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen di-mount
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array kosong berarti useEffect hanya berjalan sekali saat mount

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out 
        ${scrolled ? "bg-[#a8bdbf] text-black shadow-md" : "bg-transparent text-white"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-10 p-0 md:h-20 md:w-20">
              <Image src="/logo.png" alt="Logo Picture" fill objectFit="cover" />
            </div>
            <p className={`text-xl font-bold md:text-2xl ${lato.className} ${scrolled ? "text-black" : "text-white"}`}>
              GreenStride
            </p>
          </Link>
        </div>

        <div className={`flex items-center gap-4 ${scrolled ? "text-black" : "text-white"}`}>
          <Link href="/">About Us</Link>
          <Link href="/">Teams</Link>
          <Link href="/">Blog List</Link>
          {user ? (
            <>
              <Link href="/write">Write</Link>
              <Button variant="destructive" onClick={clearAuth}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/sign-in">Sign In</Link>
              <Link href="/sign-up">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;