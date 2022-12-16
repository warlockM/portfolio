import Image from "next/image";
export default function Framework() {
  return (
    <div class="grid grid-cols-2 justify-items-center">
      <Image src="/python.png" width={200} height={200}></Image>
      <Image src="/nextjs.png" width={200} height={200}></Image>
    </div>
  );
}