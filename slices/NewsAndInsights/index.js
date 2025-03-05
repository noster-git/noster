'use client'

/**
 * @typedef {import("@prismicio/client").Content.NewsAndInsightsSlice} NewsAndInsightsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsAndInsightsSlice>} NewsAndInsightsProps
 * @param {NewsAndInsightsProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { Swiper, SwiperSlide } from "swiper/react"

export default function NewsAndInsights({ slice }){

  let value = "cubic-bezier(0.83, 0, 0.17, 1)"

  return(
    <section className="news-showcase snow" style={{transition:`all 0.2s ${value}`, display:'none'}}>
      <div className="eyebrow-title">
        <h1 className="h1-big black-txt">
          <PrismicRichText field={slice.primary.title} />
        </h1>
      </div>
      <div className="news-showcase-item-wrapper">
        {
          slice.items.map((item, i) => {
            return(
              <PrismicLink field={item.cta_link} target="_blank" className="news-showcase-item" key={i}>
                <PrismicNextImage 
                  style={{height:'100%', width:'100%'}} sizes="100vw"
                  imgixParams={{ar:'1:1'}}
                  field={item.image} />
                  <div className="news-showcase-item-overlay">
                    <div className="news-showcase-item-text-wrapper">
                        <div className="news-showcase-item-text">
                          <h1 className="h1-small">
                            <PrismicRichText field={item.title} />
                          </h1>
                        </div>
                    </div>
                  </div>
              </PrismicLink>
            )
          })
        }
      </div>
      <div className="news-showcase-item-wrapper-mob">
        <Swiper style={{ height:'60vh'}}
        slidesPerView={1.25}
        spaceBetween={45}>
          {
            slice.items.map((item, i) => {
              return(
                <SwiperSlide style={{height:'100%'}} key={i}>
                  <PrismicLink field={item.cta_link} target="_blank" className="news-showcase-item" key={i}>
                    <PrismicNextImage 
                      style={{height:'100%', width:'100%'}} sizes="100vw"
                      imgixParams={{ar:'3:2'}}
                      field={item.image} />
                      <div className="news-showcase-item-overlay">
                        <div className="news-showcase-item-text-wrapper">
                            <div className="news-showcase-item-text">
                              <h1 className="h1-small">
                                <PrismicRichText field={item.title} />
                              </h1>
                            </div>
                        </div>
                      </div>
                  </PrismicLink>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}
