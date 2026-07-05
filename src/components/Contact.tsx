import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', suburb: '', service: '', message: '' });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          subject: `New enquiry from ${form.name} - Rotty Plumbing Co`,
          from_name: 'Rotty Plumbing Co Website',
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', phone: '', email: '', suburb: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-black" />
              <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-black leading-tight mb-6">
              Ready To<br />
              <span className="text-gray-400">Get Started?</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              Whether it's a plumbing emergency or a planned renovation, our team is ready to help. Reach out and we'll get back to you promptly.
            </p>

            <div className="space-y-6">
              <a href="tel:0432038547" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-0.5">Phone</p>
                  <p className="text-black font-bold">0432 038 547</p>
                </div>
              </a>

              <a href="mailto:admin@rottyplumbingco.com.au" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-0.5">Email</p>
                  <p className="text-black font-bold">admin@rottyplumbingco.com.au</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 tracking-widest uppercase mb-0.5">Service Areas</p>
                  <p className="text-black font-bold">Central Coast · Newcastle · Lake Macquarie · Hunter Region · Greater Sydney</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-black">
              <p className="text-white font-bold text-lg mb-1">24/7 Emergency Plumbing</p>
              <p className="text-gray-400 text-sm mb-4">Burst pipe? Blocked drain? We're available when you need us.</p>
              <a
                href="tel:0432038547"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold tracking-wide hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                CALL NOW
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-8">
            <h3 className="text-xl font-black text-black mb-6">Send Us a Message</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle className="w-12 h-12 text-black mb-4" />
                <p className="text-black font-bold text-xl mb-2">Message Sent!</p>
                <p className="text-gray-500 text-sm">We'll be in touch with you shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-xs tracking-widest underline underline-offset-4 text-gray-500 hover:text-black"
                >
                  Send another message
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
    </section>
  );
}
