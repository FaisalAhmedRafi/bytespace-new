import Image from "next/image";
import Logo from "../assets/Logo/Footer_Logo.png";

const cols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_2fr]">
        <div>
          <Image src={Logo} alt="ByteSpace Logo" className="h-8 w-auto" />
          <p className="mt-4 text-sm text-gray-500">Stay up to date with our latest features and releases by joining our newsletter.</p>
          <form className="mt-4 flex gap-2">
            <input type="email" placeholder="Enter your email" aria-label="Email" className="input !py-3 !text-base !rounded-full" />
            <button type="submit" className="btn-lime">Search</button>
          </form>
          <p className="mt-4 text-sm text-gray-500">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 text-sm text-gray-600">
          {cols.map((col, i) => (
            <ul key={i} className="space-y-3">{col.map((l) => <li key={l}><a href="#" className="hover:text-brand">{l}</a></li>)}</ul>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-6 pb-8 text-xs text-gray-500">
        <span>© 2023 ByteSpace. All rights reserved.</span>
        <span className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookies Settings</a></span>
      </div>
    </footer>
  );
}
