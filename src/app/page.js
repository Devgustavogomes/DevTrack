'use client'
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim()
    router.push(`/dashboard/${name}`)
  }
  return (
    <div className="flex flex-col justify-center content-center gap-15">
      <Header />
      <SearchBar handleSubmit={handleSubmit} />
    </div>
  );
}
