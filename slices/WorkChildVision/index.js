'use client'
/**
 * @typedef {import("@prismicio/client").Content.WorkChildVisionSlice} WorkChildVisionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorkChildVisionSlice>} WorkChildVisionProps
 * @param {WorkChildVisionProps}
 */

import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export default function WorkChildVision({ slice }){

  useEffect(() => {
    let trigger = document.querySelector('.work-vision')

    let GsapMediaQuery = gsap.matchMedia() // Gsap Media Query

    GsapMediaQuery.add("min-width: 680px", () => {
      gsap.to('.work-vision-left-wrapper', {
        scrollTrigger: {
          trigger: trigger,
          start: 'top 25%',
          end:'bottom 80%',
          markers: true,
          scrub: 0.6,
        },
        yPercent: 100,
      })
    })
  })

  return(
    <section id="workVision" className="work-vision snow">
      <div className="work-vision-wrapper">
        <div className="work-vision-left">
          <div className="work-vision-left-wrapper">
            <div className="work-vision-left-text">
              <p className="p-tag black-txt">
                Our Vision
              </p>
            </div>
            <div className="work-vision-left-description">
              <h2 className="h2-l black-txt">
                <PrismicRichText field={slice.primary.title} />
              </h2>
            </div>
          </div>
        </div>
        <div className="work-vision-right">
          <p className="p-tag black-txt">
            <PrismicRichText field={slice.primary.description} />
          </p>
        </div>
      </div>
    </section>
  )
}
