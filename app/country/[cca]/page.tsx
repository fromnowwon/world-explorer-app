import { fetchCountries } from "@/lib/fetchCountries";
import { notFound } from "next/navigation";
import CountryDetail from "@/components/CountryDetail";

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ cca: string }>;
}) {
  const { cca } = await params;

  const countries = await fetchCountries();

  // cca 코드로 해당 국가 찾기
  const country = countries.find(
    (c) => c.cca3.toLowerCase() === cca.toLowerCase()
  );

  if (!country) {
    notFound();
  }

  return <CountryDetail country={country} />;
}
