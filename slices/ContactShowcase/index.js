'use client'

import { PrismicRichText } from "@prismicio/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger)

/**
 * @typedef {import("@prismicio/client").Content.ContactShowcaseSlice} ContactShowcaseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactShowcaseSlice>} ContactShowcaseProps
 * @param {ContactShowcaseProps}
 */
export default function ContactShowcase({ slice }){

  const borderTopRef = useRef()
  const borderBottomRef = useRef()

  let Info = [ // Contact Mail/Phone Info
    {
      text:`${slice.primary.email[0].text}`,
      format: 'mailto'
    },
    {
      text: `${slice.primary.phone[0].text}`,
      format: 'tel'
    },
    {
      text: `${slice.primary.phone[0].text}`,
      format: 'tel'
    }
  ]

  let value = "cubic-bezier(0.83, 0, 0.17, 1)"

  useEffect(() => { // C-Showcase Title Anim Gsap
    const observe = document.querySelector('.c-showcase')
    const bg = document.querySelectorAll('.snow')
    const text = document.querySelectorAll('.c-showcase-title')
    const blckTxt = document.querySelectorAll('.black-txt')
    const border = document.querySelector('.c-showcase-border')

    const TxtTop = document.querySelector('.c-showcase-title-top')
    const TxtBottom = document.querySelector('.c-showcase-title-bottom')



    const AnimTrigger = () => { // Trigger Anim
      TxtTop.style.transform= "translateY(0)"
      TxtBottom.style.transform= "translateY(0)"

      TxtTop.style.opacity = "1"
      TxtBottom.style.opacity = "1"
    }

    const AnimRevert = () => { // Revert Anim
      TxtTop.style.transform= "translateY(100%)"
      TxtBottom.style.transform= "translateY(-100%)"

      TxtTop.style.opacity = "0"
      TxtBottom.style.opacity = "0"
    }

    const darkMode = () => { // Dark Mode
      bg.forEach(item => {
        item.classList.add("darkMode")
      })

      text.forEach(item => {
        item.classList.add("green-txt")
      })
      blckTxt.forEach(item => {
        item.classList.add("snow-txt")
      })

      document.body.classList.add("darkMode")

      borderTopRef.current.style.background = "#FFF"
      borderBottomRef.current.style.background = "#FFF"

    }

    const lightMode = () => { // Light Mode
      bg.forEach(item => {
        item.classList.remove("darkMode")
      })

      text.forEach(item => {
        item.classList.remove("green-txt")
      })

      blckTxt.forEach(item => {
        item.classList.remove("snow-txt")
      })
      document.body.classList.remove("darkMode")
      borderTopRef.current.style.background = "#000"
      borderBottomRef.current.style.background = "#000"
    }

    const expandLine = () => { // Expand Line
        borderTopRef.current.style.width = "100%"
        borderBottomRef.current.style.width = "100%"
    }

    const shrinkLine = () => { // Shrink Line
      borderTopRef.current.style.width = "0%"
      borderBottomRef.current.style.width = "0%"
    }

    if(observe) {
      gsap.to(observe, 
        {
        scrollTrigger: {
          trigger: observe,
          start: 'top 35%',
          onEnter: () => {
            setTimeout(() => AnimTrigger(), 400);
            darkMode();
          },
          onLeaveBack: () => {
            setTimeout(() => lightMode(), 500)
            AnimRevert();
          },
          scrub: true,
          // markers: true
        }
      }
      )
    }

    gsap.to([borderTopRef.current, borderBottomRef.current], {
      scrollTrigger: {
        trigger: observe,
        start:'top 80%',
        onEnter: () => {
          expandLine()
        },
        onLeaveBack: () => {
          shrinkLine()
        }
      }
    })

  })

  let newAddress = [
    {
      location: 'Hyderabad',
      description: "NOSTER CONCEPTS PRIVATE LIMITED Plot No-219, D No-8-2-293/82, Road No-78, Jubilee Hills,  Hyderabad, Hyderabad, Hyderabad, Telangana, India, 500033"
    },
    {
      location: 'Kochi',
      description: "Noster Associates Pvt Ltd Emaar Tower at TV Centre, Poyyachira, Kakkanad, CSEZ PO PIN 682037"
    }
  ]


  return(
    <section className="c-showcase snow" style={{transition:`all 0.3s ${value}`, overflow:'hidden'}}>
      <div className="c-showcase-border" style={{transition:`all 0.2s ${value}`, position:'relative', border:'1px rgba(255, 255, 255, 0) solid'}}>
        <div ref={borderTopRef} style={{position:'absolute', top:'0', left:'0', height:'2px', width:'0%', background:'#000', transition:`all 0.8s ${value}` }}  />
        <div ref={borderBottomRef} style={{position:'absolute', bottom:'0', left:'0', height:'2px', width:'0%', background:'#000', transition:`all 0.8s ${value}` }}  />
      {/* <CursorB image={slice.primary.cursorimage} /> */}
        {/* Desktop */}
        <div className="c-showcase-title-wrapper black-txt">
          <div className="c-showcase-title-top">
            <h1 className="c-showcase-title h1-xl">
              <PrismicRichText field={slice.primary.showcase_title} />
            </h1>
          </div>
          <div className="c-showcase-title-mid">
            <h1 className="c-showcase-title h1-xl">
              <PrismicRichText field={slice.primary.showcase_title} />
            </h1>
          </div>
          <div className="c-showcase-title-bottom">
            <h1 className="c-showcase-title h1-xl">
              <PrismicRichText field={slice.primary.showcase_title} />
            </h1>
          </div>
        </div>
        {/* Desktop End */}
        {/* Mob */}
        <div className="c-showcase-title-wrapper mob">
          <div className="c-showcase-title-mid">
            <h1 className="c-showcase-title h1-xl">
              <PrismicRichText field={slice.primary.showcase_title} />
            </h1>
          </div>
        </div>
        {/* Mob */}
        <div className="c-showcase-info-wrapper">
          <div className="c-showcase-info-left">
            <p className="p-l black-txt" style={{width: '16ch', letterSpacing: '-0.01em', lineHeight: '100%'}}>
              <PrismicRichText field={slice.primary.contact_info_text} />
            </p>
          </div>
          <div className="c-showcase-info-right">
            {
              slice.items.map((item, i) => {
                if(item.contact[0].text.includes("@")) {
                  return(
                    <div key={i} className="c-showcase-info-right-item">
                      <a href={`mailto: ${item.contact[0].text}`} className="p-l black-txt">
                        <PrismicRichText field={item.contact} />
                      </a>
                    </div>
                  )
                } else {
                  return(
                    <div key={i} className="c-showcase-info-right-item">
                      <a href={`tel: ${item.contact[0].text}`} className="p-l black-txt">
                        <PrismicRichText field={item.contact} />
                      </a>         
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
