'use client'
import { useEffect } from "react"


export default function Curtain() {

    // useEffect(() => {
    //     const curtainStart = () => {
    //         let ourBody = document.body
    //         let nav = document.querySelector('.nav')
    //         let footer = document.querySelector('.footer')
        
    //         nav.style.opacity = 0
    //         footer.style.opacity = 0
        
        
    //         console.log("Curtain Start")
    //         ourBody.classList.add('no-scroll')
    //       }
        
    //       const curtainEnd = () => {
    //         let ourCurtain = document.querySelector('.curtain-ref')
    //         let ourBody = document.body
        
    //         let nav = document.querySelector('.nav')
    //         let footer = document.querySelector('.footer')
        
    //         console.log("Curtain End")
    //         ourBody.classList.remove('no-scroll')
    //         ourCurtain.style.opacity = 0
    //         nav.style.opacity = 1
    //         footer.style.opacity = 1
        
    //         setTimeout(() => {
    //           ourCurtain.style.display = 'none'
    //         }, 2000)
    //       }

    //       curtainStart()
    //       setTimeout(() => curtainEnd(), 2000)

    // }, [])

    return(
        <div id="curtainRef" className="curtain-ref"
        style={
            {
                position:'absolute', top:'0', left:'0', display:'block',
                height:'100%', width:'100%', background:'#FFF',
                zIndex:'100', transition:'all 0.6s cubic-bezier(0.90,0.00,0.10,1.00)'}} 
        />
    )
}