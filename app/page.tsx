import { fetchCountries } from "@/lib/fetchCountries";
import CountryList from "@/components/CountryList";

export default async function HomePage() {
  const countries = await fetchCountries();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">🌍 WORLD EXPLORER</h1>
      <CountryList countries={countries} />
    </main>
  );
}
