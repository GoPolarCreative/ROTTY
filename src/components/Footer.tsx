import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const services = [
  'General Plumbing',
  'Blocked Drains & Jetting',
  'Hot Water Systems',
  'Gas Fitting & Repairs',
  'CCTV Drain Inspections',
  'Water Filtration Systems',
  'Kitchen & Bathroom Renovations',
  'Emergency Plumbing',
];

const areas = ['Central Coast', 'Newcastle', 'Lake Macquarie', 'Hunter Region', 'Greater Sydney'];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Rotty Plumbing Co"
                className="h-16 w-16 object-contain"
              />
              <div>
                <p className="text-white font-black text-lg leading-tight">ROTTY</p>
                <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Plumbing Co.</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Locally owned and operated. Reliable plumbing solutions across NSW with over 10 years of industry experience.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="Instagram"
                className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5">Services</p>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-gray-500 text-sm hover:text-gray-300 transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5">Service Areas</p>
            <ul className="space-y-2 mb-8">
              {areas.map((a) => (
                <li key={a}>
                  <span className="text-gray-500 text-sm">{a}</span>
                </li>
              ))}
            </ul>
            <p className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5">Navigation</p>
            <ul className="space-y-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white font-bold text-xs tracking-[0.2em] uppercase mb-5">Contact</p>
            <div className="space-y-4">
              <a href="tel:0432038547" className="flex items-start gap-3 group">
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 group-hover:text-white transition-colors flex-shrink-0" />
                <span className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors">0432 038 547</span>
              </a>
              <a href="mailto:admin@rottyplumbingco.com.au" className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 group-hover:text-white transition-colors flex-shrink-0" />
                <span className="text-gray-500 text-sm group-hover:text-gray-300 transition-colors break-all">
                  admin@rottyplumbingco.com.au
                </span>
              </a>
            </div>

            <div className="mt-8 p-4 border border-gray-700">
              <p className="text-white text-xs font-bold tracking-wide mb-1">Emergency Available</p>
              <p className="text-gray-500 text-xs mb-3">Same-day service for urgent plumbing needs.</p>
              <a
                href="tel:0432038547"
                className="inline-block text-xs font-bold text-white tracking-widest border-b border-white pb-0.5 hover:text-gray-300 hover:border-gray-300 transition-colors"
              >
                CALL NOW
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Rotty Plumbing Co. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            www.rottyplumbingco.com.au
          </p>
          <p className="text-gray-600 text-xs">
            Website by{' '}
            <a
              href="https://www.itscold.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Go Polar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
