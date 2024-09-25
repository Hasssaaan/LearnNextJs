import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg text-gray-600 mb-8">A place where I share my thoughts and experiences.</p>
    </div>
  );
}