import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import PrivacyPolicyText from "../Component/PrivacyPolicyText";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("privacy_policy");

  return (
    <div className="privacy-policy">
      <div className="priv-pol-wrapper">
        <PrivacyPolicyText />
        <div className="privacy-policy-right">
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("privacy_policy");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
