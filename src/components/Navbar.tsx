import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Recent Jobs', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={() => handleNav('#hero')} className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Rotty Plumbing Co logo"
              className="h-14 w-14 object-contain"
            />
            <div className="hidden sm:block">
              <p className="text-black font-black text-lg leading-tight tracking-wide">ROTTY</p>
              <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Plumbing Co.</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-gray-600 hover:text-black text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:0432038547"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 text-sm font-bold tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              0432 038 547
            </a>
          </nav>

          <button
            className="md:hidden text-black p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                className="text-gray-600 hover:text-black text-left text-sm font-medium tracking-wide py-2 border-b border-gray-100 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a
              href="tel:0432038547"
              className="flex items-center gap-2 bg-black text-white px-4 py-3 text-sm font-bold tracking-wide justify-center mt-2"
            >
              <Phone className="w-4 h-4" />
              0432 038 547
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
