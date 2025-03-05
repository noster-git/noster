'use client'
import PlayBtn from "@/app/Component/play-btn";
import { PrismicRichText } from "@prismicio/react";

import React, { useRef, useState, useEffect } from 'react'
import VideoModal from "../video-modal";

const Hero = ({ slice }) => {

    const [ modal, setModal ] = useState(false)
    const [onMount, setOnMount] = useState(false);
    const vidRef = useRef()    
    const modalVidRef = useRef()    
    const curtainRef = useRef();

    let videoLink = "/video/home/geeky-wolf-hero-video.mp4"

   const handleModalClick = () => {
        setModal(true)
        vidRef.current.pause()
        document.body.classList.add("no-scroll")
   }

   const handleCloseModal = () => {
        setModal(false)
        vidRef.current.play()
        modalVidRef.current.play()
        document.body.classList.remove("no-scroll")
   }

//    useEffect(() => {

//     if(!onMount) {
//         setOnMount(() => true);
//         return;
//     }

//     curtainRef.current.style.top = '-100vh';
//     document.body.classList.add('no-scroll');
//     setTimeout(() => document.body.classList.remove('no-scroll'), 1000);


//    }, [onMount])


  return (
    <section className="home-hero">
         {/* <div className="globalLoader" 
            ref={curtainRef}
            //
            style={
                { 
                  height:'100lvh', transition:'all 0.8s cubic-bezier(0, 0.55, 0.45, 1) 2s', background:'white',
                  zIndex: "500", position:'absolute', top:'0', left:'0', width:'100vw'
                }
        } /> */}
        <div className="home-hero-title">
            <h1 className="haffer-R green-txt">
            <PrismicRichText field={slice.primary.title} />
            </h1>
            <button 
                className="custom-button haffer-R"
                onClick={(e) => {
                    e.preventDefault();
                    setModal(() => true);
                }}
            >
                <p>
                    View Showreel
                </p>
            </button>
        </div>
        <div className="home-hero-vid">
            <video ref={vidRef} autoPlay= { modal ? 'true' : 'false'} muted loop="true" preload="metadata" playsInline="true" loading="lazy">
                <source src={videoLink} type="video/mp4" />
            </video>
            <div className="home-hero-vid-overlay">
                {/* <div style={{position: 'relative', height:'100%', width:'100%'}}>
                    <div onClick={handleModalClick} className="play-btn-container">
                        <PlayBtn />
                    </div>
                </div> */}
            </div>
        </div>
        { modal && <VideoModal modalVidRef={modalVidRef} closeModal={handleCloseModal} videoLink={videoLink} />}
    </section>
  )
}

export default Hero