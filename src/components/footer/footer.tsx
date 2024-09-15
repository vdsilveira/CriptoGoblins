import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4 bg-opacity-50 z-[20]">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/githubIcon.png" alt="GitHub Icon" width={32} height={32} className="w-8 h-8 mr-2" />
          <h1 className="text-white text-2xl font-bold">vdsilveira</h1>
        </div>
        <div>
          <Link href="https://github.com/vdsilveira?tab=repositories">
            <span className="text-white mr-10 font-semibold">Repositories</span>
          </Link>
          <Link href="https://www.linkedin.com/in/vdsilveira/">
            <span className="text-white font-semibold">LinkedIn</span>
          </Link>
        </div>
      </nav>
    </footer>
  );
}
