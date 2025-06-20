import Navbar from "@/components/Navbar";
import  Main  from "@/components/Main";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Main/>
      <Footer/>
    </div>
  );
}