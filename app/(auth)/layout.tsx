import Logo from "../../assets/Logo/logo.png";
import auth from "../../assets/auth.png";
import Image from "next/image";
import AvatarStack from "../../assets/AutoLayoutHorizontal.png";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-grid-blue flex min-h-dvh flex-col items-center justify-center gap-4 overflow-y-auto p-3 lg:h-dvh lg:min-h-0 lg:flex-row lg:items-stretch lg:justify-center lg:gap-8 lg:overflow-hidden lg:p-8">
      
      <section className="mx-0 flex w-full max-w-xl flex-col items-center justify-center text-center text-white lg:mx-6 lg:h-full lg:w-[40%] lg:max-w-none lg:items-start lg:text-left">
        <div className="flex w-full max-w-lg flex-col items-center gap-4 lg:items-start">
        <Image src={Logo} alt="ByteSpace Logo" className="h-8 w-8" />
        <h2 className="text-2xl font-bold">Sign up and come in</h2>
        <p>Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
        <Image src={auth} alt="auth image" className="hidden h-auto max-h-[calc(100dvh-4rem)] w-full max-w-lg object-contain lg:block" />
        </div>
      </section>
      <section className="mx-0 flex w-full max-w-xl items-center justify-center lg:mx-6 lg:h-full lg:w-[30%] lg:max-w-none lg:pt-10">{children}</section>
    </main>
  );
}
