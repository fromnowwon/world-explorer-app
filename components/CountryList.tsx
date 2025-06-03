"use client";

import { List } from "antd";
import CountryCard from "./CountryCard";
import { Country } from "@/types/country";

export default function CountryList({ countries }: { countries: Country[] }) {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={countries}
      renderItem={(country) => (
        <List.Item>
          <CountryCard country={country} />
        </List.Item>
      )}
    />
  );
}
