import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
  <li><Link href="/Home">Home</Link></li>
  <li><Link href="/News">News</Link></li>
  <li><Link href="/Contact">Contact</Link></li>
  <li><Link href="/Property">Property</Link></li>
</ul>
    </div>
  );
}
