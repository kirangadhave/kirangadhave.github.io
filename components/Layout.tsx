import clsx from "clsx";
import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import styles from "./layout.module.css";
import Navbar from "./Navbar/Navbar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = null }: Props) => (
  <>
    <Head>
      <title>{title ? `${title} | Kiran Gadhave` : "Kiran Gadhave"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={clsx(["min-h-screen", styles.layout])}>
      <header>
        <Navbar />
      </header>

      <div className="container mx-auto p-4 max-w-6xl">
        <div className="px-2 h-full">{children}</div>
      </div>
      <Footer />
    </div>
  </>
);

export default Layout;
