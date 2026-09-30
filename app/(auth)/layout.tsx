import Logo from "../../assets/Logo/logo.png";
import auth from "../../assets/auth.png";
import Image from "next/image";
import AvatarStack from "../../assets/AutoLayoutHorizontal.png";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-grid-blue grid h-dvh grid-rows-1 gap-4 overflow-hidden p-3 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:p-8 lg:flex lg:items-stretch lg:justify-center">
      
      <section className="min-h-0 w-[40%] flex flex-col justify-center text-white lg:flex lg:h-full mx-6">
        <div className="flex flex-col gap-4 w-full max-w-lg">
        <Image src={Logo} alt="ByteSpace Logo" className="h-8 w-8" />
        <h2 className="text-2xl font-bold">Sign up and come in</h2>
        <p>Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.</p>
        <Image src={auth} alt="auth image" className="h-auto max-h-[calc(100dvh-4rem)] w-full max-w-lg object-contain" />
        </div>
      </section>
      <section className="flex min-h-0 w-[30%] items-center justify-center mx-6 pt-10 lg:h-full">{children}</section>
    </main>
  );
}
