// components/AppLayoutWrapper.tsx
'use client'; // WAJIB: Menandakan ini adalah Client Component

import { usePathname } from 'next/navigation'; // Import Hook usePathname
import React from 'react';
import Navbar from './Navbar'; // Import komponen Navbar Anda (sesuaikan path)

interface AppLayoutWrapperProps {
  children: React.ReactNode;
}

const AppLayoutWrapper: React.FC<AppLayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname(); // Dapatkan path URL saat ini

  // Definisikan path mana saja yang TIDAK ingin menampilkan navbar
  const noNavbarPaths = ['/sign-in', '/sign-up']; // Anda bisa tambahkan path lain di sini

  // Periksa apakah path saat ini ada di daftar noNavbarPaths
  const showNavbar = !noNavbarPaths.includes(pathname);

  return (
    <>
      {showNavbar && <Navbar />} {/* Render Navbar hanya jika showNavbar adalah true */}
      <main>{children}</main> {/* Konten halaman akan selalu dirender */}
    </>
  );
};

export default AppLayoutWrapper;