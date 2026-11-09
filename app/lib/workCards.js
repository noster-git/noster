import * as prismic from "@prismicio/client";

/**
 * Turns the LatestWorks slice's repeatable items into showcase cards, newest first.
 * Editors add new projects at the bottom of the list, so the list is reversed:
 * the last item added is shown first. Items without a project link are skipped.
 */
export function toWorkCards(items) {
  return items
    .filter((item) => prismic.isFilled.contentRelationship(item.cta_link))
    .reverse()
    .map((item) => ({
      uid: item.cta_link.uid,
      name: prismic.asText(item.company_name),
      description: prismic.asText(item.description),
      image: item.image,
    }));
}

/**
 * Every project, newest first, for the /works page. The LatestWorks slice on the
 * Home document is the single list of projects editors maintain.
 */
export async function getAllWorkCards(client) {
  const home = await client.getSingle("home");
  const slice = home.data.slices.find((s) => s.slice_type === "latest_works");
  return slice ? toWorkCards(slice.items) : [];
}
