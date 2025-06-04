import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "WORLD EXPLORER APP",
  description: "전 세계 국가 정보를 탐색할 수 있는 간단한 웹 앱입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "var(--font-montserrat), sans-serif",
            },
          }}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
