import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("works_child", params.uid)
    .catch(() => notFound());

  return groupImageSlices(page.data.slices).map((group, i) =>
    group.isImage ? (
      <div key={i} className="works-img-grid">
        <SliceZone slices={group.slices} components={components} />
      </div>
    ) : (
      <SliceZone key={i} slices={group.slices} components={components} />
    )
  );
}

// Groups consecutive work_child_image slices so they can sit side by side.
function groupImageSlices(slices) {
  const groups = [];
  for (const slice of slices) {
    const isImage = slice.slice_type === "work_child_image";
    const last = groups[groups.length - 1];
    if (last && last.isImage === isImage) last.slices.push(slice);
    else groups.push({ isImage, slices: [slice] });
  }
  return groups;
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("works_child", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("works_child");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
