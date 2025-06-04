import { GlobalOutlined } from "@ant-design/icons";
import CountrySearch from "@/components/CountrySearch";
import { fetchCountries } from "@/lib/fetchCountries";

export default async function HomePage() {
  const countries = await fetchCountries();

  return (
    <main className="p-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <GlobalOutlined className="text-3xl text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">
          WORLD EXPLORER
        </h1>
      </div>
      <div className="w-full">
        <CountrySearch countries={countries} />
      </div>
    </main>
  );
}
