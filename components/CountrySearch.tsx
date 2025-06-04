"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Input, List, Typography, Spin } from "antd";
import CountryCard from "./CountryCard";
import { Country } from "@/types/country";

const { Title, Text } = Typography;

interface CountrySearchProps {
  countries: Country[];
}

export default function CountrySearch({ countries }: CountrySearchProps) {
  const [search, setSearch] = useState("");

  const batchSize = 20;

  // 검색어 필터링
  const filtered = useMemo(() => {
    const keyword = search.toLowerCase();

    return countries.filter((c) => {
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
  }, [countries, search]);

  const [visibleCountries, setVisibleCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 필터링 결과가 바뀌면 초기화
  useEffect(() => {
    setVisibleCountries(filtered.slice(0, batchSize));
  }, [filtered]);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // 다음 배치 로딩 시작
          setIsLoading(true);

          setTimeout(() => {
            setVisibleCountries((prev) => {
              const nextBatch = filtered.slice(
                prev.length,
                prev.length + batchSize
              );
              if (nextBatch.length === 0) return prev;
              return [...prev, ...nextBatch];
            });
            // 로딩 끝내기 (0.5초 후)
            setIsLoading(false);
          }, 500); // 0.5초 딜레이 줘서 로딩 UI 보이게 함
        }
      },
      { threshold: 1 }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [filtered]);

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
        grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 4, xxl: 4 }}
        dataSource={visibleCountries}
        renderItem={(country) => (
          <List.Item key={country.cca3}>
            <CountryCard country={country} />
          </List.Item>
        )}
      />

      <div className="flex justify-center py-4">
        {isLoading && <Spin size="large" />}
      </div>

      <div ref={loadMoreRef} className="h-1" />
    </div>
  );
}
