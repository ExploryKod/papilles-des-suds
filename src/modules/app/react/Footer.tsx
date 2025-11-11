"use client";
import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-200 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-sm">
          <Link 
            href="/mentions-legales" 
            className="text-neutral-200 hover:underline underline-offset-2 transition duration-150"
          >
            Mentions légales
          </Link>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <Link 
            href="/politique-de-confidentialite" 
            className="text-neutral-200 hover:underline underline-offset-2 transition duration-150"
          >
            Politique de confidentialité
          </Link>
          <span className="hidden sm:inline text-neutral-400">|</span>
          <Link 
            href="/conditions-generales" 
            className="text-neutral-200 hover:underline underline-offset-2 transition duration-150"
          >
            CGU
          </Link>
        </div>
        <div className="mt-4 text-center text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Papilles des Suds - Site de démonstration</p>
        </div>
      </div>
    </footer>
  );
};

