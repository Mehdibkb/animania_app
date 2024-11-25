import Image from "next/image";

export default function APropos() {
  return (
    <div>
      <Image
        src="/images/logo_rbg.png"
        alt="Logo"
        width={150}
        height={150}
        className="rounded-full" // Ajoute une bordure ronde à l'image
      />
      <div>A Propos</div>
    </div>
  );
}
