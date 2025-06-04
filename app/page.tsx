import { GlobalOutlined } from "@ant-design/icons";
import CountrySearch from "@/components/CountrySearch";
import { fetchCountries } from "@/lib/fetchCountries";

export default async function HomePage() {
  const countries = await fetchCountries();

  return (
    <main className="py-14 px-4 sm:py-10 sm:px-2.5 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 mb-6 justify-center text-center">
        <GlobalOutlined className="text-4xl text-blue-500" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
          WORLD EXPLORER
        </h1>
      </div>

      <div className="w-full">
        <CountrySearch countries={countries} />
      </div>
    </main>
  );
}
