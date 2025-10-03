import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Script from "next/script"

export default function Home() {
  return (
    <>
      {/* ElevenLabs Convai Widget */}
      <elevenlabs-convai agent-id="agent_5501k3cktjrxeaqscmh61xvxjvbm"></elevenlabs-convai>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        async
        strategy="afterInteractive"
      />

      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <Navbar />

        <div className="h-screen p-25">
          <Hero />
        </div>

        <main className="w-full">
          {/* Section 1 */}
          <section className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <h1 className="text-5xl font-bold text-white">Section 1</h1>
          </section>

          {/* Section 2 */}
          <section className="h-screen w-full flex items-center justify-center bg-gray-900">
            <h1 className="text-5xl font-bold text-white">Section 2</h1>
          </section>

          {/* Section 3 */}
          <section className="h-screen w-full flex items-center justify-center bg-green-600">
            <h1 className="text-5xl font-bold text-white">Section 3</h1>
          </section>
        </main>
      </div>
    </>
  )
}
