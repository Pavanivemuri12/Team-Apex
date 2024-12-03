import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-[1rem]">
   <main><h1>Hello World!</h1>
   <Link href="/DAY-1">Users</Link>
   </main>

   </div>
  );
}
