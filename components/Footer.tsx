"use client";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const featuredLinks = [
    { name: "Home", href: "/" },
    { name: "Why KnowEra", href: "/why-know-era" },
    { name: "Our Services", href: "/services" },
    { name: "Universities", href: "/universities" },
    { name: "Resources", href: "/resources" },
  ];

  const quickLinks = [
    { name: "Book Consultation", href: "/book-consultation" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="KnowEra Logo"
                width={200}
                height={60}
                className="h-12 w-auto mb-4"
              />
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Expert Education Consultancy for UK Students – Get Personalised
              Guidance Every Step of the Way.
            </p>
          </div>

          {/* Featured Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {featuredLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-knowera-blue-text transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Other Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Information
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-knowera-blue-text transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-knowera-blue-text mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    123 Education Lane, University City
                    <br />
                    London, SW1A 0AA, U.K
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-knowera-orange-text flex-shrink-0" />
                <a
                  href="tel:+441234567890"
                  className="text-gray-600 hover:text-knowera-blue-text transition-colors text-sm"
                >
                  +44 (0) 123 456 7890
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-knowera-blue-text flex-shrink-0" />
                <a
                  href="mailto:info@knowera.co.uk"
                  className="text-gray-600 hover:text-knowera-blue-text transition-colors text-sm"
                >
                  info@knowera.co.uk
                </a>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-knowera-orange-text mt-1 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <div>Mon-Fri: 9AM-5PM</div>
                  <div>Sat: 10AM-2PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} KnowEra. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-knowera-blue-text transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-knowera-blue-text transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-knowera-blue-text transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
