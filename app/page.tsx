import Electronics from "@/components/Electronics";
import Phone from "@/components/Phone";
import Wears from "@/components/Wears";
import {SessionProvider} from "next-auth/react"
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
 <h1>Home</h1>
   {/* <SessionProvider>{}</SessionProvider> */}
   <div className="flex flex-col gap-4">
   <Phone/>
   <Wears/>
   <Electronics/>
   </div>

    </div>
  );
}
