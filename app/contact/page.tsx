"use client";
import React, { useEffect, useState } from "react";
import ContactUsModule from "../components/module/contact";
import { client } from "@/sanity/lib/client";
import { Qcontact } from "@/sanity/lib/query";

const Contact = () => {
  const [links, setLinks] = useState();

  useEffect(() => {
    (async () => {
      const res = await client.fetch(Qcontact);
      setLinks(res?.[0]);
    })();
  }, []);

  return (
    <>
      <ContactUsModule links={links} />
    </>
  );
};

export default Contact;
