import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import NoTab from "@/components/NoTab";
import Ordering from "@/components/Ordering";
import QRcode from "@/components/QRcode";
import ScanQRcode from "@/components/ScanQRcode";
import Scanner from "@/components/Scanner";


export default function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Header />
        <Hero />
        <div className='hero_gradient w-1/2 h-1/2 absolute 
         -z-10 top-[15%] lg:top-0  lg:h-1/3 right-0'></div>
      </div>
        
        
      <main>
        <Mission />
        <Scanner />
        <QRcode />
        <ScanQRcode />
        <Ordering />
        <NoTab />
        <GetInTouch />
      </main>
      <Footer />
    </>
  )
}
