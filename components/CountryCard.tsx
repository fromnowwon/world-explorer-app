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
    <Link href={`/country/${country.cca3}`} passHref>
      <Card
        hoverable
        className="transition-shadow shadow-sm hover:shadow-md"
        cover={
          <Image
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            width={240}
            height={160}
            style={{ objectFit: "cover", width: 240, height: 160 }}
            priority
          />
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
