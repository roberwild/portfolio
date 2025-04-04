"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

export const ThemeLogo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Renderiza un placeholder mientras se carga
    return (
      <Link href="/" className="flex items-center">
        <div className="h-10 w-40 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
      </Link>
    );
  }
  
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src={theme === 'dark' ? "/logo-singular-bank-white.svg" : "/sb-logo-n.svg"} 
        alt="Singular Bank" 
        width={165} 
        height={53} 
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
}; 