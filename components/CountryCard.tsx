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
        className="transition-shadow shadow-sm hover:shadow-md flex flex-col min-h-91"
        cover={
          <div className="relative w-full aspect-[3/2] overflow-hidden rounded-t-lg">
            <Image
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              fill
              style={{ objectFit: "cover", zIndex: 0 }}
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 border-b border-gray-200 z-10" />
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
