"use client";

import { List } from "antd";
import CountryCard from "./CountryCard";
import { Country } from "@/types/country";

export default function CountryList({ countries }: { countries: Country[] }) {
  return (
    <div className="p-8">
      <List
        grid={{
          gutter: 24,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
        }}
        dataSource={countries}
        renderItem={(country) => (
          <List.Item>
            <CountryCard country={country} />
          </List.Item>
        )}
      />
    </div>
  );
}
