import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Head from "next/head";
import { defaultKeywords, defaultTitle } from "../../lib/constants";
import { theme } from "../../styles/theme";
import '@mantine/carousel/styles.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo-black.png" />
        <title>{defaultTitle}</title>
        <meta property="og:title" content={defaultTitle} />
        {/* <meta name="description" content={defaultDescription} /> */}
        <meta name="keywords" content={defaultKeywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionProvider session={session} basePath={process.env.NEXTAUTH_URL}>
        <MantineProvider theme={theme}>
          <Notifications />
          <Component {...pageProps} />
        </MantineProvider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
