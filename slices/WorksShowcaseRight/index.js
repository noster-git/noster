'use client'
import CursorA from "@/app/Component/CustomCursor/CursorA";
/**
 * @typedef {import("@prismicio/client").Content.WorksShowcaseRightSlice} WorksShowcaseRightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WorksShowcaseRightSlice>} WorksShowcaseRightProps
 * @param {WorksShowcaseRightProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink, PrismicRichText } from "@prismicio/react"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';


export default function WorksShowcaseRight({ slice }){

  const [ activeB, setActiveB ] = useState(0); 


  const handleHoverRight = (i) => {
    setActiveB(i)
  }

  console.log(slice.primary.company_name_a.length, "RIGHT")

  let data = [
    {
      title: slice.primary.company_name_a,
      desc: slice.primary.description_a,
      image: slice.primary.image_a,
      link: slice.primary.cta_link_a.uid
    },
    {
      title: slice.primary.company_name_b ? slice.primary.company_name_b : null,
      desc: slice.primary.description_b ? slice.primary.description_b:null,
      image: slice.primary.image_b ? slice.primary.image_b:null,
      link: slice.primary.cta_link_b.uid ? slice.primary.cta_link_b.uid:null
    },
    {
      title: slice.primary.company_name_c ? slice.primary.company_name_c: null ,
      desc: slice.primary.description_c ? slice.primary.description_c : null,
      image: slice.primary.image_c ? slice.primary.image_c:null,
      link: slice.primary.cta_link_c.uid ? slice.primary.cta_link_c.uid :null
    }, 
  ]


  useEffect(() => {
    // Custom Cursor F-Works
    let cursor = document.querySelector('.cursor-A')
    let CursorBg = document.querySelector('.cursor-A-bg')

    document.addEventListener("mousemove", moveCursor);

    function moveCursor (e) {
      let x = e.clientX;
      let y = e.clientY;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }

    let CursorContainer = document.querySelectorAll('.fw-showcase-item')
    let TextContainer = document.querySelectorAll('.fw-showcase-item-text-wrapper')
    let TextColor = document.querySelector('.cursor-A-text-wrapper')
    let TextBorder = document.querySelector('.cursor-A-text')
    let TextArrow = document.querySelector('.cursor-A-arrow')


    CursorContainer.forEach(element => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.add('cursor-active')
        CursorBg.classList.add('cursor-A-bg-active')
        TextColor.classList.add('cursor-A-text-active')
        TextBorder.classList.add('cursor-A-text-u-active')
        TextArrow.classList.add('cursor-A-arrow-reveal')
      })

      element.addEventListener("mouseleave", () => {
        CursorBg.classList.remove('cursor-A-bg-active')
        cursor.classList.remove('cursor-active')
        TextColor.classList.remove('cursor-A-text-active')
        TextBorder.classList.remove('cursor-A-text-u-active')
        TextArrow.classList.remove('cursor-A-arrow-reveal')
      })
    })

    TextContainer.forEach(element => {
      element.addEventListener("mouseenter", () => {
        cursor.classList.remove('cursor-active')
      })

      element.addEventListener("mouseleave", () => {
        cursor.classList.add('cursor-active')
      })
    })
  })


  return(
    <section className="snow">
      <CursorA />
      <div className="works-showcase-right snow">
        {
        data.map((item, i) => {
          return(
            <div onMouseOver={() => handleHoverRight(i)} key={i} 
            className={ activeB === i ? "fw-showcase-item expand-fw-showcase-item":"fw-showcase-item"} 
            style={{
                display: ((slice.primary.company_name_a.length === 0) || (slice.primary.company_name_a[0].text === "")) && i === 0  ? 'none' :
                ((slice.primary.company_name_b.length === 0) || (slice.primary.company_name_b[0].text === "")) && i === 1  ? 'none': 
                ((slice.primary.company_name_c.length === 0) ||  (slice.primary.company_name_c[0].text === "")) && i === 2 ? 'none':'' 
              }}>
            <a href={`/works/${item.link}`} className="fw-showcase-item-link">
              <PrismicNextImage 
                style={{height:'100%', width:'100%'}}
                sizes="100vw"
                loading="eager"
                priority={true}
                imgixParams={{ar:'3:2'}}
                field={item.image}
                loader={undefined} />
            </a>
            <div className="fw-showcase-item-text-wrapper">
              <div className={ activeB === i ? "fw-showcase-item-text-inner-wrapper active-inner-wrapper" : "fw-showcase-item-text-inner-wrapper"}>
                <div className="fw-showcase-item-c-name">
                  <p className="black-txt">
                    <PrismicRichText field={item.title}  />
                  </p>
                </div>
                <div className="fw-showcase-item-desc">
                  <p className="black-txt">
                    <PrismicRichText field={item.desc} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          )
        })
      }
      </div>
      <div className="works-showcase-right-mob snow">
        {/* <Swiper style={{padding:'0 0 6em 0'}}
        slidesPerView={1.1}
        spaceBetween={20} 
        initialSlide={data.length}
        >
          {
            data.map((item, i) => {
              return(
                <SwiperSlide key={i}>
                  <div key={i}
              className={"fw-showcase-item"}>
              <PrismicLink className="fw-showcase-item-link" field={item.link}>
                <PrismicNextImage 
                  style={{height:'100%', width:'100%'}}
                  sizes="100vw"
                  loading="eager"
                  priority={true}
                  imgixParams={{ar:'3:2'}}
                  field={item.image}
                  loader={undefined} />
              </PrismicLink>
              <div className="fw-showcase-item-text-wrapper">
                <div className={"fw-showcase-item-text-inner-wrapper active-inner-wrapper"}>
                  <div className="fw-showcase-item-c-name">
                    <p>
                      <PrismicRichText field={item.title}  />
                    </p>
                  </div>
                  <div className="fw-showcase-item-desc">
                    <p>
                      <PrismicRichText field={item.desc} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
                </SwiperSlide>
              )
            })
          }
        </Swiper> */}
        {
          data.map((item, i) => {
            return(
              <div style={{width:'95%', margin:'2em 0'}} key={i}>
              <a href={`/works/${item.link}`} className="fw-showcase-item-link">
                <PrismicNextImage 
                  style={{height:'100%', width:'100%'}}
                  sizes="100vw"
                  loading="eager"
                  priority={true}
                  imgixParams={{ar:'3:2'}}
                  field={item.image}
                  loader={undefined} />
              </a>
              <div className="fw-showcase-item-text-wrapper">
                <div className={"fw-showcase-item-text-inner-wrapper active-inner-wrapper"}>
                  <div className="fw-showcase-item-c-name">
                    <p className="black-txt">
                      <PrismicRichText field={item.title}  />
                    </p>
                  </div>
                  <div className="fw-showcase-item-desc">
                    <p className="black-txt">
                      <PrismicRichText field={item.desc} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
  </section>
  )
}
