import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 text-left">
            <div className="text-2xl font-bold mb-4">Happy Craft Event</div>
            <p className="text-white/80 mb-4 max-w-md">
              Where creativity meets perfection — HappyCraft Event crafts
              corporate events that inspire, engage, and delight.
            </p>
            <div className="flex space-x-4 justify-start">
              <Link
                href="#"
                className="hover:scale-110 transition-transform duration-200"
                title="Instagram"
              >
                <Image
                  draggable={false}
                  src="/socials/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 transition-transform duration-200"
                title="Facebook"
              >
                <Image
                  draggable={false}
                  src="/socials/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 transition-transform duration-200"
                title="Pinterest"
              >
                <Image
                  draggable={false}
                  src="/socials/pinterest.png"
                  alt="Pinterest"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link
                href="#"
                className="hover:scale-110 transition-transform duration-200"
                title="Twitter"
              >
                <Image
                  draggable={false}
                  src="/socials/x.png"
                  alt="Twitter/X"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left text-sm">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-left">
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Event Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Brand Launch
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Exhibition & Trade Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/80 hover:text-primary transition-colors text-sm"
                >
                  Conference & Seminars
                </Link>
              </li>
             
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left">
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start space-x-3 justify-start">
                <div className="bg-primary rounded-full p-1 mt-0.5 flex-shrink-0">
                  <MapPin className="h-3 w-3 text-primary-foreground" />
                </div>
                <div className="text-sm text-left">
                  <p>Shakespeare 9th Floor, Ps Arcadia Central
                  4A, Camac St, Elgin, Kolkata, WB 700017</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 justify-start">
                <div className="bg-primary rounded-full p-1 flex-shrink-0">
                  <Mail className="h-3 w-3 text-primary-foreground" />
                </div>
                <Link
                  href="mailto:hello@one8event.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  hello@one8event.com
                </Link>
              </div>

              <div className="flex items-center space-x-3 justify-start">
                <div className="bg-primary rounded-full p-1 flex-shrink-0">
                  <Phone className="h-3 w-3 text-primary-foreground" />
                </div>
                <Link
                  href="tel:+919800821100"
                  className="text-sm hover:text-primary transition-colors"
                >
                  +91 9800 821100
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} HappyCraft Event. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="flex space-x-6 font-sans text-sm opacity-90">
              <span className="hover:opacity-100 cursor-auto transition-opacity">
                Designed & Crafted By{" "}
                <Link
                  href="https://dipakdev.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  <strong>Dipak</strong>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
