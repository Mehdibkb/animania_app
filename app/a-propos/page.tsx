import Footer from "@/components/Footer";
import Image from "next/image";

export default function APropos() {
  return (
    <div>
      <div>
        <Image
          src="/images/logo_rbg.png"
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div>A Propos</div>
      </div>
      <Footer />
    </div>
  );
}
