'use client'
import NavComponentA from "@/app/Component/NavComponent/NavComponentA";
/**
 * @typedef {import("@prismicio/client").Content.WorkChildHeroSlice} WorkChildHeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildHeroSlice>} WorkChildHeroProps
 * @param {WorkChildHeroProps}
 */

import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Parallax } from "react-scroll-parallax";

export default function WorkChildHero({ slice }){
  return(
    <section className="work-uid-hero">
      {/* <NavComponentA /> */}
      <div className="work-uid-hero-title">
        <h1 className="h1-big">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
      <div className="work-uid-hero-wrapper">
        <Parallax className="work-uid-overlay" speed={-30} style={{height:'110%', width:'100%'}}>
          <PrismicNextImage height={500 * 10} width={500 * 10} style={{ height:'100%', width:'100%', objectFit:'cover'}} 
            loading='eager' 
            imgixParams={{ar:'3:2'}} 
            field={slice.primary.image} />
        </Parallax>
      </div>
    </section>
  )
}
