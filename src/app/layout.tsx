import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import AppBar from "@/app/components/appbar";
import Footer from "@/app/components/footer";
import * as React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYAI 인공지능학회",
  description: "Hanyang University ERICA Artificial Intelligence Study Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          fontFamily: "Roboto",
          backgroundColor: "#f0f0f0",
        }}
      >
        <AppRouterCacheProvider options={{ key: "css" }}>
          <AppBar />
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            {children}
          </div>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
