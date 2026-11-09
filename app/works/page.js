import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { getAllWorkCards } from "@/app/lib/workCards";
import WorksGrid from "@/app/Component/WorksGrid/WorksGrid";

// Every project from the home page's LatestWorks list, newest first.
// Title and SEO come from the "works" document in Prismic.
export default async function Page() {
  const client = createClient();
  const [page, works] = await Promise.all([getWorksPage(client), getAllWorkCards(client)]);

  return (
    <>
      <section className="featured-title all-works-title snow">
        <div className="eyebrow black-txt">
          <div className="eyebrow-title">
            <h1 className="h1-big">:{prismic.asText(page?.data.title) || "Our Works"}</h1>
          </div>
        </div>
      </section>
      <WorksGrid works={works} />
    </>
  );
}

export async function generateMetadata() {
  const page = await getWorksPage(createClient());
  return {
    title: page?.data.meta_title || "Works | Noster",
    description: page?.data.meta_description,
  };
}

function getWorksPage(client) {
  return client.getSingle("works").catch(() => null);
}
