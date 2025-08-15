"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why KnowEra", href: "/why-know-era" },
    { name: "Our Services", href: "/services" },
    { name: "Universities", href: "/universities" },
    { name: "Resources", href: "/resources" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="relative z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="KnowEra Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-knowera-blue-text font-medium transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-knowera-blue-text transition-all duration-200 group-hover:w-full"></span>
            </Link>
          ))}
          <Button className="btn-knowera-gradient font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            <Link href="/book-consultation">Book a Free Consultation</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 h-full w-80 bg-white transform transition-transform duration-300 shadow-2xl ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/knowera-logo.png"
                alt="KnowEra Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:text-knowera-blue-text hover:bg-knowera-blue/5 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="font-medium">{link.name}</span>
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <Button className="w-full btn-knowera-gradient font-bold py-3 rounded-full">
                <Link
                  href="/book-consultation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
