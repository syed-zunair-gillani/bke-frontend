"use client";
import { client } from "@/sanity/lib/client";
import AboutModule from "../components/module/about";
import { QAbout } from "@/sanity/lib/query";
import { useEffect, useState } from "react";

export default function About() {
  const [about, setAbout] = useState();

  useEffect(() => {
    (async () => {
      const aboutRes = await client.fetch(QAbout);
      setAbout(aboutRes?.[0]);
    })();
  }, []);

  return (
    <>
      <AboutModule data={about} />
    </>
  );
}
