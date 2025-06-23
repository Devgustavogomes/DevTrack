import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center content-center gap-20">
      <Header />
      <SearchBar />
    </div>
  );
}
