import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

const solutionLinks = ['Digital Transformation', 'Hospitality Tech', 'Cloud Solutions', 'UI/UX Design', 'Systems Integration'];
const companyLinks = ['Our Vision', 'Privacy Policy', 'Terms of Service', 'Corporate Governance', 'Contact Us'];
const socialLinks = [
  { label: 'LinkedIn', icon: FaLinkedinIn, href: '#' },
  { label: 'Instagram', icon: FaInstagram, href: '#' },
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'X', icon: FaXTwitter, href: '#' },
  { label: 'YouTube', icon: FaYoutube, href: '#' },
];

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand/Logo Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-slate-900 tracking-tight">Lushware</h2>
            <p className="text-[15px] leading-relaxed text-slate-500">
              Architecting digital excellence for elite hospitality. 
              Bridging the gap between island serenity and global technology.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-cyan-600 hover:text-cyan-600"
                >
                  <social.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Solutions</h5>
            <ul className="space-y-4 text-[14px] text-slate-500">
              {solutionLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-cyan-700 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Company</h5>
            <ul className="space-y-4 text-[14px] text-slate-500">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-cyan-700 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h5 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Insights</h5>
            <p className="mb-6 text-[14px] text-slate-500">Subscribe for our periodic updates on Maldivian tech trends.</p>
            <div className="flex flex-col gap-3">
              <input
                className="w-full border-b border-slate-300 py-2 text-sm outline-none focus:border-cyan-600 placeholder:text-slate-300"
                placeholder="Email address"
                type="email"
              />
              <button className="text-left text-xs font-bold uppercase tracking-widest text-cyan-700 hover:text-slate-900">
                Subscribe →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-slate-100 pt-8 lg:flex-row lg:items-center">
          <p className="text-[12px] text-slate-400">© 2026 Lushware Maldives. All rights reserved.</p>
          <div className="flex gap-8 text-[12px] font-medium text-slate-500">
            <span>Male', Maldives</span>
            <span>Est. 2014</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;