import { Card } from "antd";
import { Country } from "@/types/country";
import Image from "next/image";

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Card>
      <Image
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        width={240}
        height={160}
        style={{ objectFit: "cover" }}
      />
      <p>수도: {country.capital?.[0] || "정보 없음"}</p>
      <p>지역: {country.region}</p>
      <p>인구: {country.population.toLocaleString()}명</p>
    </Card>
  );
}
