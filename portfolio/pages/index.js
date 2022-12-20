import Experience from "./components/experience"
import Navbar from "./components/navbar"
import Image from "next/image"
import Skills from "./components/skills"
import Footer from "./components/footer"
export default function Home() {
  return (
    <div>
      <Navbar />
    <div class="font-bold md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 m-10 mt-20 justify-items-center">
      <div>
      <Image src="/head.png" width={400} height={400} class="shrink-0"/>
      </div>
      <div>
      <h1 class="p-2 sm:text-lg md:text-3xl lg:text-5xl font-extrabold">Are you looking for a dynamic professional with Software Engineering and Leadership Experience?</h1>
      <p class="p-2 sm:text-md md:text-xl lg:text-3xl">You are in the right place.</p>
          <a href="https://calendly.com/mayankraj07/meet-mayank" target="_blank">
            <button class="mt-4 ml-2 p-4 bg-blue-700 text-white rounded-md">Connect with me</button>
          </a>
      </div>
    </div>
    <h1 class="sm:text-3xl md:text-5xl text-center mt-10 font-bold">Experience</h1>
    <Experience />
    <Skills />
    <Footer />
    </div>
  )
}
