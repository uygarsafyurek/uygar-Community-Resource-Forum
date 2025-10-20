"use client";

import dynamic from "next/dynamic";

const ClientPage = dynamic(() => import("./ClientPage"));

export default function ClientWrapper({ tags, session }: any) {
  return <ClientPage tags={tags} session={session} />;
}
