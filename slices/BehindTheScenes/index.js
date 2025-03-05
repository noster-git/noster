/* eslint-disable @next/next/no-img-element */
'use client'
/**
 * @typedef {import("@prismicio/client").Content.BehindTheScenesSlice} BehindTheScenesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BehindTheScenesSlice>} BehindTheScenesProps
 * @param {BehindTheScenesProps}
 */

import { PrismicNextImage } from "@prismicio/next"
import { PrismicLink } from "@prismicio/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(Draggable, ScrollTrigger)

export default function BehindTheScenes({ slice }){

  const arrow = "->"


  useEffect(() => {


    const imgFrames = document.querySelectorAll('.img-frame')
    const frame = document.querySelector('.frame-B')
  
    const drag = () => {
      Draggable.create('.frame-B', {
        type: 'x,y',
        bounds: window,
        inertia: true,
        onDragStart: function(){
        console.log("Drag Start")
          gsap.to(imgFrames, {
            duration: 0.2,
            scale: 1.1,
            ease: 'power1.out'
          })
        },
        onDragEnd: function(){
            console.log("Drag End")
          gsap.to(imgFrames, {
            duration: 0.2,
            scale: 1,
            ease: 'power1.out'
          })
        }
      })
    }

    gsap.to(imgFrames, {
      scrollTrigger: {  
        trigger: '.frame-A',
        start: 'top center',
        onEnter: () => {
          drag()
          console.log("drag function enter")
        },
        onLeave: () => {
          console.log("drag function leave")
        }
      },
      duration: 0.3,
      scale: 1,
      ease: 'expo.inOut',
      stagger: 0.2
      // onComplete: drag(),
      // stagger: 0.8
    })

  })

  return(
    <div className="b-scene-frame snow">
      <div className="b-scene-title">
        <h1 className="h-l snow-txt" style={{userSelect:'none'}}>
          <span style={{background:'#000', padding:'0 8px'}}>Behind</span><br /><span style={{background:'#000', padding:'0 8px'}}><span className="haffer-I">the </span>Scenes</span>
        </h1>
      </div>
      <div className="b-scene-inner-frame snow">
        <div className="frame-A snow">
          <div className="frame-B">
            {
              slice.items.map((item, i) => {
                return(
                  <div key={i} className="img-frame" style={{scale:'0'}}>
                    <figure className="img-frame-figure">
                      <PrismicNextImage loading="eager" height={500} width={500} priority={true} field={item.image} style={{height:'100%', width:'100%', objectFit:'cover'}} />
                    </figure>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
