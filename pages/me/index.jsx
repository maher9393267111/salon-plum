import React from 'react'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";


export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div>

<Head>
                <title>{t("home")}</title>
            </Head>
           <h1 className="text-3xl font-bold bg-green-200 underline">
      Hello world! {t("home")}
    </h1>
    </div>
  )
}


export async function getStaticProps({ locale }) {

  return {
      props: {
          ...(await serverSideTranslations(locale, ["common", "home"])),
          
      },
  };
}