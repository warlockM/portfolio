import Image from "next/image"
export default function Footer(){
  return (
    <div class = "grid grid-cols-3 justify-items-center p-10 bg-slate-200">
      <a href=""><Image src="/bf.png" width={40} height={40} /></a>
      <a href="https://www.instagram.com/mayank_ra.j/" target="_blank"><Image src="/insta.png" width={40} height={40} /></a>
      <a href="https://www.linkedin.com/in/raj-mayank/" target="_blank"><Image src="/linkedin.png" width={40} height={40} /></a>
    </div>
  );
}
