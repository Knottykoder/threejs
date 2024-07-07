import Image from "next/image";
import bg from '../../public/background/home-background.png'
import RenderModal from "@/components/RenderModal";
import Wizard from "@/components/modals/Wizard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
   <Image src={bg} alt="background" fill className="w-full h-full object-cover object-center opacity-25"/>

   <div className="w-full h-screen">
<RenderModal>
  <Wizard/>
</RenderModal>
   </div>
    </main>
  );
}
