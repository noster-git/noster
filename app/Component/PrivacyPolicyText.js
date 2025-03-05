'use client'
import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)



const PrivacyPolicyText = () => {

  useEffect(() => {
    let ctx = gsap.context(() => {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger:'.privacy-policy-left.privacy-policy-left-desk',
          start:'top 10%',
          end:'bottom 50%',
          scrub: true,
          pin: true,
        }
      })

      // tl.to('.privacy-policy-left', {
      //   top:'96%'
      // })
    })

    return () => ctx.revert();
  }, [])

  // useEffect(() => {

  //   gsap.to('.privacy-policy-left', {
  //     top:'96%',
  //     scrollTrigger: {
  //       trigger: '.privacy-policy',
  //       start: 'top top',
  //       end: 'bottom 50%',
  //       scrub: true,
  //       markers: true
  //     }
  //   })

  // })

  return (
    <>
    <div className="privacy-policy-left privacy-policy-left-desk">
      <div>
          <p className="h1-big" style={{color:'black'}}>
              :Privacy Policy
          </p>
      </div>
    </div>
    <div className="privacy-policy-left privacy-policy-left-mob">
      <div>
          <p className="h1-big" style={{color:'black'}}>
              :Privacy Policy
          </p>
      </div>
    </div>
    </>
  )
}

export default PrivacyPolicyText