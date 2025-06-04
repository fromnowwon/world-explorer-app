import { Card, Typography } from "antd";
import { Country } from "@/types/country";
import Image from "next/image";
import Link from "next/link";

const { Title, Text } = Typography;

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link href={`/country/${country.cca3}`}>
      <Card
        hoverable
        className="transition-shadow shadow-sm hover:shadow-md flex flex-col min-h-85"
        cover={
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-lg">
            <Image
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="border-b border-gray-200"></div>
          </div>
        }
      >
        <Title level={5} className="mb-2">
          {country.name.common}
        </Title>
        <Text type="secondary">
          수도: {country.capital?.[0] || "정보 없음"}
        </Text>
        <br />
        <Text type="secondary">지역: {country.region}</Text>
        <br />
        <Text type="secondary">
          인구: {country.population.toLocaleString()}명
        </Text>
      </Card>
    </Link>
  );
}
