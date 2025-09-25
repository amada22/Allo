import Content1 from "@/components/content1"
import Navbar from "@/components/navbar"


export default function Home() {
  return (
    <>
    <div className="h-screen bg-cover bg-center"  style={{ backgroundImage: "url('/bg.jpg')" }}>
      <Navbar />

      <div className="p-25 ">

    <Content1/>
      </div>
    
      
      </div>
       </>
  )
}
