/**
 * @typedef {import("@prismicio/client").Content.HomeHeroSlice} HomeHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HomeHeroSlice>} HomeHeroProps
 * @param {HomeHeroProps}
 */

import Hero from "@/app/Component/slices/hero";

export default function HomeHero({ slice }){

  return(
    <Hero slice={slice} />
  )
}
