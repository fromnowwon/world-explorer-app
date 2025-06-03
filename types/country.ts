export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  cca2: string;
  cca3: string;
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: {
    svg: string;
    png: string;
  };
  languages?: Record<string, string>;
  currencies?: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  translations?: Record<string, { official: string; common: string }>;
}
