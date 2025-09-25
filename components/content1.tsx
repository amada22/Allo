import Image from "next/image";

export default function Content1() {
  return (
    <div className="text-white min-h-[400px] w-full flex justify-between items-center px-6">
      {/* Left side: Text */}
      <div className="flex flex-col justify-center max-w-[600px] space-y-4">
        <h1 className="text-5xl font-bold">
          Customer support based on AI technology
        </h1>
        <p className="text-lg text-white/80">
          Handling calls and performing actions with customers like a human would. Efficient, fast, and intelligent.
        </p>
        <div className="flex items-center space-x-2 text-lg text-white font-semibold backdrop-blur-md bg-white/5 rounded-2xl px-4 py-2 cursor-pointer hover:bg-white/40 w-max">
          <span>Get Started</span>
          <div className="relative w-5 h-5">
            <Image src="/arrow.svg" alt="Arrow" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      </div>

      {/* Right side: Placeholder box */}
      <div className="backdrop-blur-md bg-white/5 mr-5 flex-1 h-5/6 rounded-4xl flex items-center justify-center text-center">
        {/* Add an image or illustration here */}
      </div>
    </div>
  );
}
