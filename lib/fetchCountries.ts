import { Country } from "@/types/country";

export async function fetchCountries(): Promise<Country[]> {
  const res = await fetch(
    "https://restcountries.com/v3.1/independent?status=true",
    {
      next: { revalidate: 3600 }, // 1시간마다 캐시 재검증
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}
