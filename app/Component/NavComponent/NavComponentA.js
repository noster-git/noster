import { useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export default function NavComponentA( )  {


    let data = [
        {
          text:'Brief',
          link:'#workBrief'
        },
        {
          text:'Vision',
          link:'#workVision'
        },
        {
          text:'Execution',
          link:'.worksImg'
        },
      ]

      useEffect(() => {

        let navComponentA = document.querySelector('.works-nav')

        let timer = null

        window.addEventListener("scroll", (e) => {
            if(timer !== null) {
                clearTimeout(timer)
                navComponentA.classList.add('works-nav-hide')
            }
            timer = setTimeout(() => {
                navComponentA.classList.remove('works-nav-hide')
            },10)
        })

        let elipse = document.querySelectorAll('.elipse')
        elipse.forEach(item => {
            item.style.opacity = 0
        })
        // const observer = new IntersectionObserver((items) => {
        //     items.forEach(item => {
        //         if(item.isIntersecting) {
        //             elipse[0].style.opacity = 1
        //         } else {
        //             elipse[0].style.opacity = 0
        //         }
        //     })
        // },{threshold: 1})
        // observer.observe(document.getElementById('workBrief'))


        // const observerB = new IntersectionObserver((items) => {
        //     items.forEach(item => {
        //         if(item.isIntersecting) {
        //             elipse[1].style.opacity = 1
        //         } else {
        //             elipse[1].style.opacity = 0
        //         }
        //     })
        // }, {threshold: 0.6})
        // observerB.observe(document.getElementById('workVision'))

        
        // const observerC = new IntersectionObserver((items) => {
        //     items.forEach(item => {
        //         if(item.isIntersecting) {
        //             elipse[2].style.opacity = 1
        //         } else {
        //             elipse[2].style.opacity = 0
        //         }
        //     })
        // })
        // observerC.observe(document.querySelector('.worksImg'))

        const observerD = new IntersectionObserver((items) => {
            items.forEach(item => {
                if(item.isIntersecting) {
                    navComponentA.style.opacity = 0
                    setTimeout(() => {
                        navComponentA.style.display = "none"
                    }, 500)
                } else {
                    navComponentA.style.display = "flex"
                    navComponentA.style.opacity = 1
                }
            })
          })
          observerD.observe(document.querySelector('.footer'))
      })




    return(
        <div className="works-nav snow" style={{display:'none'}}>
            {
            data.map((item, i) => {
                return(
                <div onClick={() => {
                   lenis.scrollTo(`${item.link}`)
                }} className="works-nav-item snow" key={i} style={{borderRight: i != 2 ? '1px #000 solid':'', position:'relative', cursor:'pointer'}}>
                    <div className="elipse-container" style={{width:'10%', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', position:'relative', left:'-5%'}}>
                        <div className="elipse" style={{height:'0.5em', width:'0.5em', background:'#000', borderRadius:'50%', position:'relative', opacity:'0'}} />
                    </div>
                    <a className="black-txt"  style={{position:'relative', width:'60%', display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
                    { item.text }
                    </a>
                </div>
                )
            })
            }
        </div>
    )
}