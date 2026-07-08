import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, FolderOpen, Sparkles } from 'lucide-react';

const DRIVE_URL = 'https://drive.google.com/drive/folders/1-EA_uh-U5IQ-f490FvFrc5shwIx74Ci9?usp=sharing';
const WHATSAPP_URL = 'https://wa.me/94706410093';
const WHATSAPP_QR = '/assets/images/Whatsapp_QR.jpeg';

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(
              '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right'
            );
            els.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 100));
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300';

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            Get In Touch
          </div>
          <h2 className="animate-on-scroll text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Let's Build Something
            <span className="text-accent"> Great Together</span>
          </h2>
          <p className="animate-on-scroll text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Ready to elevate your brand? We'd love to hear about your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Creative Partner Card */}
            <div className="animate-on-scroll-left p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-accent" />
                <span className="text-accent text-xs font-bold tracking-widest uppercase">Your Creative Partner</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you're launching a new business, refreshing your brand, or growing your
                online presence, BrandHive Studio is here to help bring your ideas to life with
                creative design and strategic thinking.
              </p>
            </div>

            {/* Phone */}
            <a
              href="tel:+94706410093"
              className="animate-on-scroll-left group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Phone size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Phone</p>
                <p className="text-gray-900 font-semibold text-sm group-hover:text-accent transition-colors duration-200">
                  +94 70 641 0093
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:brandhive.studio.lk@gmail.com"
              className="animate-on-scroll-left group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Mail size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-gray-900 font-semibold text-sm group-hover:text-accent transition-colors duration-200 break-all">
                  brandhive.studio.lk@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="animate-on-scroll-left group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <MapPin size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-gray-900 font-semibold text-sm">Sri Lanka</p>
              </div>
            </div>

            {/* WhatsApp button + QR */}
            <div className="animate-on-scroll-left p-5 bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">WhatsApp</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-3.5 px-5 rounded-xl hover:bg-[#20bd5a] active:scale-95 transition-all duration-300 shadow-lg shadow-green-500/20 mb-4"
              >
                <WhatsAppIcon size={20} />
                Chat on WhatsApp
              </a>
              {/* QR Code */}
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="flex-shrink-0 rounded-2xl overflow-hidden shadow-xl shadow-black/20 ring-1 ring-black/5">
                  <img
                    src={WHATSAPP_QR}
                    alt="BrandHive Studio WhatsApp QR — scan to chat"
                    width={140}
                    height={140}
                    className="block w-[140px] h-auto"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Scan to Chat Instantly</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Open your phone camera and point it at the QR code to start a WhatsApp conversation directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="animate-on-scroll-left p-5 bg-accent/5 border border-accent/15 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-900">Currently Accepting Projects</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                We're open to new projects and collaborations. Reach out and let's discuss your vision.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="animate-on-scroll-right bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', service: '', message: '' });
                    }}
                    className="mt-2 text-accent text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service...</option>
                      <option>Brand Identity</option>
                      <option>Logo Design</option>
                      <option>Graphic Design</option>
                      <option>Social Media Design</option>
                      <option>Social Media Management</option>
                      <option>Meta Advertising</option>
                      <option>Print Design</option>
                      <option>Marketing Strategy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                  <div className="flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 bg-accent text-white font-semibold py-4 px-6 rounded-xl hover:bg-accent-500 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={16} />
                        </>
                      )}
                    </button>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#20bd5a] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-green-500/15"
                    >
                      <WhatsAppIcon size={18} />
                      Chat on WhatsApp
                    </a>

                    <a
                      href={DRIVE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-gray-50 border border-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl hover:bg-gray-100 hover:border-accent/30 hover:text-accent active:scale-[0.98] transition-all duration-300"
                    >
                      <FolderOpen size={16} />
                      Browse Full Portfolio
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
