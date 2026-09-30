import Link from "next/link";

const links = [["Home", "/"], ["Courses", "/#courses"], ["Creators", "/#creators"]];

export default function Navbar() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-5 text-white md:px-[8.4%]">
      
      <nav className="hidden gap-10 md:flex">
        {links.map(([label, href]) => (
          <Link key={label} href={href} className="hover:translate-y-[-3px] hover:font-bold"> {label} </Link>
        ))}
      </nav>
      <div className="flex items-center gap-6 text-sm md:text-base">
        <Link href="/login" className="hover:text-lime">Sign In</Link>
        <Link href="/register" className="hover:text-lime">Join Us</Link>
        <button aria-label="Cart" className="hover:text-lime">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 8h14l1 13H4zM9 8V6a3 3 0 016 0v2" /></svg>
        </button>
      </div>
    </header>
  );
}
