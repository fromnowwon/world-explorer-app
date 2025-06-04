"use client";

import { useState } from "react";
import { Input, List, Typography } from "antd";
import CountryCard from "./CountryCard";
import { Country } from "@/types/country";

const { Title, Text } = Typography;

interface CountrySearchProps {
  countries: Country[];
}

export default function CountrySearch({ countries }: CountrySearchProps) {
  const [search, setSearch] = useState("");
  // 검색어에 따른 필터링
  const filtered = countries.filter((c) => {
    const keyword = search.toLowerCase();

    // translations 객체에서 모든 언어 이름 추출
    const translatedNames = Object.values(c.translations || {}).map((t) =>
      t.common.toLowerCase()
    );

    return (
      c.name.common.toLowerCase().includes(keyword) ||
      c.capital?.[0]?.toLowerCase().includes(keyword) ||
      c.region.toLowerCase().includes(keyword) ||
      translatedNames.some((name) => name.includes(keyword))
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8 gap-2">
        <Title level={3}>국가 검색</Title>
        <Input.Search
          placeholder="국가 이름, 수도, 지역 검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          className="w-full max-w-md shadow"
          size="large"
        />
        <Text type="secondary">
          총 {filtered.length.toLocaleString()}개 국가 검색됨
        </Text>
      </div>

      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 4,
          xxl: 4,
        }}
        dataSource={filtered}
        renderItem={(country) => (
          <List.Item key={country.cca3}>
            <CountryCard country={country} />
          </List.Item>
        )}
      />
    </div>
  );
}
