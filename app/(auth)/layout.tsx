import Logo from "@/components/Logo";
import AvatarStack from "@/components/AvatarStack";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-grid-blue grid min-h-screen gap-10 p-6 lg:grid-cols-[1.1fr_1fr] lg:p-12">
      <section className="hidden flex-col justify-between text-white lg:flex">
        <Logo />
        <div className="relative mb-10 h-[26rem]" aria-hidden>
          <div className="absolute left-10 top-0 w-80 rounded-3xl bg-white p-4 text-ink shadow-xl">
            <div className="h-36 rounded-xl bg-gradient-to-br from-slate-800 to-cyan-800" />
            <p className="mt-4 font-heading text-lg font-semibold">the Power of Big Data</p>
            <p className="text-sm text-gray-500">by <span className="text-brand">purepearl studio</span></p>
            <div className="mt-3"><AvatarStack /></div>
            <p className="mt-3 text-xl font-bold text-brand">$25<span className="text-sm font-normal text-gray-500">/lifetime</span></p>
          </div>
          <div className="absolute bottom-0 left-28 rounded-2xl bg-lime p-4 text-ink">
            <p className="font-heading">Happy Students</p>
            <div className="mt-2"><AvatarStack count={7} label="2K+" /></div>
          </div>
          <div className="absolute left-0 top-6 h-20 w-20 rounded-full border-[18px] border-lime" />
        </div>
      </section>
      <section className="flex items-center justify-center">{children}</section>
    </main>
  );
}
