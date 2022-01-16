import React from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind.scss";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  return (
    <ThemeProvider enableSystem defaultTheme="system" attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
