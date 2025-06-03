"use client";

import { useState } from "react";
import { Input, List } from "antd";
import CountryCard from "./CountryCard";
import { Country } from "@/types/country";

interface Props {
  countries: Country[];
}

export default function CountrySearch({ countries }: Props) {
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
      c.capital?.[0].toLowerCase().includes(keyword) ||
      c.region.toLowerCase().includes(keyword) ||
      translatedNames.some((name) => name.includes(keyword))
    );
  });

  return (
    <>
      <Input.Search
        placeholder="국가 이름, 수도, 지역 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        allowClear
        style={{ maxWidth: 400, marginBottom: 20 }}
      />

      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={filtered}
        renderItem={(country) => (
          <List.Item key={country.cca3}>
            <CountryCard country={country} />
          </List.Item>
        )}
      />
    </>
  );
}
