import { useState } from 'react';
import { Phone, Send, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const services = [
  'General Plumbing',
  'Blocked Drains & Jetting',
  'Hot Water Systems',
  'Gas Fitting & Repairs',
  'CCTV Drain Inspections',
  'Water Filtration Systems',
  'Renovations',
  'Emergency Plumbing',
  'Other',
];

export default function Hero() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', suburb: '', service: '', message: '' });

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'a6aef0b4-b545-4c7c-9bde-a0f344ca970b',
          subject: `Quick enquiry from ${form.name} - Rotty Plumbing Co`,
          from_name: 'Rotty Plumbing Co Website',
          ...form,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-white" />
              <span className="text-gray-300 text-xs tracking-[0.3em] uppercase font-medium">
                Licensed &amp; Insured
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-4">
              ROTTY<br />
              <span className="text-gray-300">PLUMBING</span><br />
              <span className="text-white">CO.</span>
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              Reliable residential &amp; commercial plumbing across the Central Coast, Newcastle, Lake Macquarie &amp; Greater Sydney. Honest advice. Quality workmanship. Every time.
            </p>

            <div className="flex flex-wrap gap-8">
              {[
                { stat: '10+', label: 'Years Experience' },
                { stat: '24/7', label: 'Emergency Service' },
                { stat: '100%', label: 'Licensed & Insured' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-white text-3xl font-black">{item.stat}</p>
                  <p className="text-gray-400 text-xs tracking-wide uppercase mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8">
            <p className="text-black font-black text-xl mb-1">Get In Touch</p>
            <p className="text-gray-500 text-sm mb-6">We'll call you back shortly.</p>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle className="w-10 h-10 text-black mb-3" />
                <p className="text-black font-bold text-lg mb-1">Message Received!</p>
                <p className="text-gray-500 text-sm mb-6">We'll be in touch with you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs tracking-widest underline underline-offset-4 text-gray-400 hover:text-black transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="04XX XXX XXX"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                    Suburb
                  </label>
                  <input
                    type="text"
                    name="suburb"
                    value={form.suburb}
                    onChange={handleChange}
                    placeholder="e.g. Gosford"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us a bit about the job..."
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 text-sm font-bold tracking-wide hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND ENQUIRY
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 pt-2">
                  <span className="flex-1 h-px bg-gray-100" />
                  <span className="text-gray-400 text-xs">or</span>
                  <span className="flex-1 h-px bg-gray-100" />
                </div>

                <a
                  href="tel:0432038547"
                  className="w-full flex items-center justify-center gap-2 border border-black text-black py-3 text-sm font-bold tracking-wide hover:bg-black hover:text-white transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  CALL 0432 038 547
                </a>
              </form>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#services')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
