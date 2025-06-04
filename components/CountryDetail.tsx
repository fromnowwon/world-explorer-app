"use client";

import Image from "next/image";
import { Country } from "@/types/country";
import { useRouter } from "next/navigation";
import { Button, Card, Descriptions, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface CountryDetailProps {
  country: Country;
}

export default function CountryDetail({ country }: CountryDetailProps) {
  const router = useRouter();

  const nativeNameEntry = country.name.nativeName
    ? Object.values(country.name.nativeName)[0]
    : null;

  const displayName = nativeNameEntry
    ? `${nativeNameEntry.common} (${country.name.common})`
    : `${country.name.common}`;

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-4">
      <Space>
        <Button icon={<ArrowLeftOutlined />} onClick={() => router.back()}>
          뒤로 가기
        </Button>
      </Space>

      <Card
        title={
          <div className="text-xl font-semibold flex items-center gap-3">
            <Image
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              width={64}
              height={40}
              className="rounded shadow"
            />
            {displayName}
          </div>
        }
        className="shadow-md p-4"
      >
        <Descriptions bordered column={1}>
          <Descriptions.Item label="공식 명칭">
            {country.name.official}
          </Descriptions.Item>
          <Descriptions.Item label="수도">
            {country.capital?.[0] || "정보 없음"}
          </Descriptions.Item>
          <Descriptions.Item label="지역">
            {country.region} {country.subregion && `> ${country.subregion}`}
          </Descriptions.Item>
          <Descriptions.Item label="인구">
            {country.population.toLocaleString()}명
          </Descriptions.Item>
          <Descriptions.Item label="언어">
            {country.languages
              ? Object.values(country.languages).join(", ")
              : "정보 없음"}
          </Descriptions.Item>
          <Descriptions.Item label="통화">
            {country.currencies
              ? Object.values(country.currencies)
                  .map((c) => `${c.name} (${c.symbol})`)
                  .join(", ")
              : "정보 없음"}
          </Descriptions.Item>
          <Descriptions.Item label="국가 코드">
            {country.cca3}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </main>
  );
}
