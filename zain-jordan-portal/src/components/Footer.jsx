const FOOTER_SECTIONS = [
  {
    title: "MOBILE",
    links: ["Postpaid", "Prepaid", "Roaming", "Services"],
  },
  {
    title: "INTERNET",
    links: ["Postpaid", "Prepaid", "Internet Services"],
  },
  {
    title: "MEDIA CENTER",
    links: [
      "About Us",
      "Press Releases",
      "Corporate Sustainability",
      "Corporate Entrepreneurship Responsibility",
      "Sponsorship Requests",
    ],
  },
];

const HELP_STRIP = [
  { label: "Call Us", detail: "0790001234" },
  { label: "Live Chat", detail: "Available 24/7" },
  { label: "Help & support", detail: "Visit our Support Section" },
  { label: "Visit Us", detail: "Find a Zain Store" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-16 pt-8 pb-12 text-gray-600 text-xs">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Help Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-gray-100 gap-4">
          <span className="text-base font-black text-gray-900">Need Help?</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HELP_STRIP.map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="font-bold text-gray-800">{item.label}</span>
                <span className="text-gray-500 text-[11px] mt-0.5">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Directory Links & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {FOOTER_SECTIONS.map((sec) => (
            <div key={sec.title} className="space-y-3">
              <h4 className="font-bold text-gray-900 tracking-wider text-[11px]">
                {sec.title}
              </h4>
              <ul className="space-y-2 text-gray-500">
                {sec.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link}`}
                      className="hover:text-[#3eb6e6] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Media Column */}
          <div className="md:col-span-2 space-y-3 md:text-right">
            <h4 className="font-bold text-gray-900 tracking-wider text-[11px]">
              SOCIAL MEDIA
            </h4>
            <div className="flex md:justify-end gap-3 text-sm font-bold text-gray-400">
              <span className="cursor-pointer hover:text-gray-700">f</span>
              <span className="cursor-pointer hover:text-gray-700">X</span>
              <span className="cursor-pointer hover:text-gray-700">in</span>
              <span className="cursor-pointer hover:text-gray-700">📷</span>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-[11px]">
          <div className="flex gap-4">
            <a href="#about" className="hover:underline">
              About Us
            </a>
            <a href="#careers" className="hover:underline">
              Careers
            </a>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
            <a href="#terms" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
          <p>© 2026 Copyright Zain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
