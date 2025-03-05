'use client'
/**
 * @typedef {import("@prismicio/client").Content.WorkChildImageSlice} WorkChildImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildImageSlice>} WorkChildImageProps
 * @param {WorkChildImageProps}
 */

import { PrismicNextImage } from "@prismicio/next";
import { Parallax } from "react-scroll-parallax";
// import SimpleParallax from "simple-parallax-js";
// import Rellax from "rellax";

export default function WorkChildImage({ slice }) {
  
  const imageDimensions = slice.primary.image.dimensions;
  const width = imageDimensions.width;
  const height = imageDimensions.height;

  const isHeightDominant = height > width;

  return(
    <section className={`${isHeightDominant ? 'vertical-image':'worksImg'} snow`} style={{overflow:'hidden'}}>
      <div className="parallax" style={{height:'98%', width:'100%', overflow:'hidden'}}>
        {/* <Parallax className="desk-parallax" speed={-50} style={{height:'110%', width:'100%'}}>
          <PrismicNextImage className="thumbnail"
            field={slice.primary.image}  
            style={{height:'100%', width:'100%', objectFit:'cover', scale:'1'}} 
            imgixParams={{ar:'3:2'}} loading="eager" />
        </Parallax> */}

        <div className="desk-parallax" style={{height:'100%', width:'100%'}}>
          <PrismicNextImage className="thumbnail"
            field={slice.primary.image}  
            style={{height:'100%', width:'100%', objectFit:'cover', scale:'1'}} 
            imgixParams={{ ar: '3:2' }} loading="eager"
            alt=""
          />
        </div>
        <PrismicNextImage className="mob-img"
          field={slice.primary.image}  
          style={{height:'100%', width:'100%', objectFit:'cover', scale:'1'}} 
          imgixParams={{ ar: '3:2' }} loading="eager"
          alt=""
        />
      </div>
    </section>
  )
}
