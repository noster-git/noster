'use client'
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { PrismicRichText } from "@prismicio/react"
import { PrismicNextImage } from "@prismicio/next"

const Marquee = ({ slice }) => {
    

  return (
    <section className='marquee-slice'>
        <div className='marquee-text side-pad'>
            <div className='p-tag black-txt'>
              <PrismicRichText field={slice.primary.title} />
            </div>
        </div>
        <div className='logos'>
            <div className='logos-slide'>
              {
                slice.items.map((item, i) => {

                  const taurusUrl = item.marquee_logo.url.includes('Taurus' || 'taurus')

                  return(
                    <div
                      style={{height: `${taurusUrl ? '4.6em' : ''}`}}
                      key={item.marquee_logo.id}>
                      <PrismicNextImage 
                        key={i}
                        field={item.marquee_logo}
                        alt=''
                      />
                    </div>
                  )
                })
              }
            </div>
            <div className='logos-slide'>
              {
                slice.items.map((item, i) => {
                  const taurusUrl = item.marquee_logo.url.includes('Taurus' || 'taurus')
                  return(
                    <div
                      style={{height: `${taurusUrl ? '4.6em' : ''}`}} 
                      key={item.marquee_logo.id}>
                      <PrismicNextImage 
                        key={i}
                        field={item.marquee_logo}
                        alt=''
                      />
                    </div>
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Marquee