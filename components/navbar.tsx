import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-2 w-full flex items-center justify-between px-6 py-3">
      {/* Left side: Logo + Brand + Menu */}
      <div className="flex items-center space-x-12">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image src="/logo.svg" alt="Logo" fill style={{ objectFit: "contain" }} />
          </div>
          <div className="text-3xl text-white font-semibold">Allo</div>
        </div>

        {/* Menu items */}
        <div className="flex items-center space-x-10">
          <a href="#home" className="text-white font-medium hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="text-white font-medium hover:text-gray-300">
            About Us
          </a>
          <a href="#pricing" className="text-white font-medium hover:text-gray-300">
            Pricing
          </a>
          <a href="#features" className="text-white font-medium hover:text-gray-300">
            Features
          </a>
          <a href="#contact" className="text-white font-medium hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-lg text-white font-semibold backdrop-blur-md bg-white/5 rounded-2xl px-4 py-2 cursor-pointer hover:bg-white/40">
        <span>Get Started</span>
        <div className="relative w-5 h-5">
          <Image src="/arrow.svg" alt="Arrow" fill style={{ objectFit: "contain" }} />
        </div>
      </div>
    </nav>
  );
}
