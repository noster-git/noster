'use client'

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePathname } from "next/navigation";
gsap.registerPlugin(ScrollTrigger);

export default function Nav(){

    const [ hbActive, setHbActive ] = useState(false);
    // const [mount, setMount] = useState(false);

    // const path = usePathname();
    // const isHome = path === '/'

    const handleHbClick = () => {
        
        setHbActive(!hbActive)

        let bottom = document.querySelector('.line-bottom')
        let top = document.querySelector('.line-top')
        let logo = document.querySelector('.nav-logo-svg')

        if(!hbActive) {
            setTimeout(() => {
                bottom.style.transform = 'translate(-50%,-50%) rotate(45deg)'
                top.style.transform = 'translate(-50%,-50%) rotate(-45deg)'
                bottom.style.background = '#000'
                top.style.background = '#000'
                logo.style.color = '#000'
                bottom.style.width = '80%'
                top.style.width = '80%'

            }, 500)
        } else {
            bottom.style.transform = 'translate(-50%,-50%) rotate(0deg)'
            top.style.transform = 'translate(-50%,-50%) rotate(0deg)'
            bottom.style.background = '#FFF'
            top.style.background = '#FFF'
            bottom.style.width = '100%'
            top.style.width = '100%'
            logo.style.color = '#FFF';
        }
// 
    }


    const arrow = '->'

    let NavLink = [
        // {
        //     text:'Work',
        //     link:'/works'
        // },
        // {
        //     text:'About',
        //     link:'/'
        // },
        // {
        //     text:'Blog',
        //     link:'/'
        // }
    ]


    // useEffect(() => {

    //     if(!mount) {
    //         setMount(true);
    //         return;
    //     }
    //     const navLogoSvg = document.querySelector('.nav-logo-svg');
    //     const bookText = document.querySelector('.nav-right-text');
    //     const arrow = document.querySelector('.nav-right-arrow');

    //     if(isHome) {
    //         const observer = new IntersectionObserver((entries) => {

    
    //             entries.forEach(entry => {
    //                 if(entry.isIntersecting) {
    //                     navLogoSvg.style.color = '#ffffff';
    //                     bookText.style.color = '#ffffff';
    //                     arrow.style.color = '#000000';
    //                     arrow.style.backgroundColor = '#ffffff';
    //                 } else {
    //                     navLogoSvg.style.color = '#000000';
    //                     bookText.style.color = '#000000';
    //                     arrow.style.color = '#ffffff';
    //                     arrow.style.backgroundColor = '#000000';
    //                 }
    //             });
    //         });
    //         observer.observe(document.querySelector('.home-hero'));
            
    //     } else {
    //         // navLogoSvg.style.color = '#000000';
    //         // bookText.style.color = '#000000';
    //         // arrow.style.color = '#ffffff';
    //         // arrow.style.backgroundColor = '#000000';
    //     }

    // }, [mount]);

    // useEffect(() => {

    //     let Section = document.getElementById('homeBrief')

    //     document.querySelector('.nav').style.opacity = 1

    //     let tl = gsap.timeline({
    //         scrollTrigger:{
    //             trigger: Section,
    //             start: 'top 10%',
    //             end: 'top 10%',
    //             markers: false,
    //             scrub: true
    //         },
    //     });

    //     tl.fromTo(['.nav-mid-item', '.nav-logo-svg', '.nav-right-text'], 
    //     {
    //         color:'white'
    //     },
    //     {
    //         color:'black'
    //     })
    //     // tl.fromTo(['.nav'], 
    //     // {
    //     //     background:'none'
    //     // },
    //     // {
    //     //     background:'#FFF'
    //     // })

    //     tl.fromTo('.nav-right-arrow',
    //     {
    //         background:'#FFF',
    //         color:'#000'
    //     },
    //     {
    //         background:'#000',
    //         color:'#FFF'
    //     })

    //     tl.fromTo('.hb-line', 
    //     {
    //         background: '#FFF'
    //     }, 
    //     {
    //         background: '#000'
    //     }
    //     )
    // }, []);


    return(
        <nav className="nav" style={{opacity:'1', background: 'none'}}>
            <div className="nav-left" style={{}}>
                <a href={'/'} style={{cursor:'pointer'}} className="nav-logo">
                    <svg className="nav-logo-svg" viewBox="0 0 3252 574" fill="currentColor" xmlns="http://www.w3.org/2000/svg" 
                        width="150" height="25">
                        <path d="M728.613 226.947C722.613 241.03 718.809 255.95 717.332 271.186L595.675 270.301C599.071 200.148 628.025 133.664 677.075 83.3924C702.962 56.8442 733.93 35.7793 768.131 21.4527C802.333 7.12603 839.068 -0.169198 876.149 0.00221976C913.196 0.0540067 949.866 7.45056 984.036 21.7642C1018.21 36.0778 1049.2 57.0245 1075.22 83.3924C1124.69 133.76 1153.77 200.656 1156.84 271.186L1035.19 271.186C1032.76 243.889 1022.82 217.799 1006.46 195.814C990.095 173.83 967.959 156.813 942.507 146.654C921.432 138.055 898.911 133.551 876.149 133.382C844.931 131.97 814.034 140.19 787.643 156.926C761.253 173.662 740.645 198.107 728.613 226.947Z" fill="currentColor"/>
                        <path d="M1465.41 115.02C1479.33 117.306 1492.54 122.739 1504.04 130.904C1515.54 139.068 1525.02 149.75 1531.77 162.134L1672.45 162.134C1653.2 69.6751 1575.34 12.1647 1466.52 7.29845L1465.41 115.02Z" fill="currentColor"/>
                        <path d="M1530.22 238.228L1419.62 213.233C1393.96 207.924 1375.38 195.759 1375.38 168.994C1375.38 142.23 1401.71 119.889 1433.11 115.465V7.96502C1324.95 13.2737 1236.47 71.6688 1236.47 176.957C1236.47 258.946 1284.69 310.558 1381.13 331.793L1493.5 355.903C1522.92 361.875 1543.27 372.714 1543.27 403.46C1543.27 440.842 1506.11 458.095 1465.63 458.758V569.355C1491.36 568.891 1516.93 565.175 1541.72 558.296C1615.16 537.724 1678.2 487.735 1678.2 395.276C1678.2 302.816 1613.17 256.366 1530.22 238.228Z" fill="currentColor"/>
                        <path d="M1393.52 438.592C1405.09 447.268 1418.61 452.977 1432.89 455.218L1431.79 567.584C1346.63 562.718 1280.93 528.433 1245.76 474.241C1232.25 453.461 1223.41 429.986 1219.88 405.449H1366.54C1372.69 418.536 1381.95 429.915 1393.52 438.592Z" fill="currentColor"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2891.23 365.418L3082.78 365.418C3122.94 358.631 3159.32 337.622 3185.27 306.229C3211.22 274.836 3225.01 235.156 3224.12 194.435C3224.12 85.829 3141.4 17.4801 3030.58 17.4801L2758.51 17.4801V556.308H2891.23V365.418ZM2891 131.616H3016.2C3058.89 131.616 3094.06 153.735 3094.06 195.983C3094.06 238.231 3059.55 261.014 3016.2 261.014H2891V131.616Z" fill="currentColor"/>
                        <path d="M2952.27 397.712H3111.53L3251.33 556.308H3091.63L2952.27 397.712Z" fill="currentColor"/>
                        <path d="M1887.67 556.308H2019.28V166.565H1887.67V556.308Z" fill="currentColor"/>
                        <path d="M1713.37 134.042V18.3578L2193.58 18.3578V134.042L1713.37 134.042Z" fill="currentColor"/>
                        <path d="M132.716 45.3505L109.933 18.3648L0 18.3648L2.35143e-05 556.308H132.495L132.495 244.867L132.716 245.31V45.3505Z" fill="currentColor"/>
                        <path d="M349.486 493.266L165.231 282.468V83.836L349.486 301.048V493.266Z" fill="currentColor"/>
                        <path d="M382.223 18.3648L382.223 339.538L382.002 339.317V530.429L404.564 556.308H513.833V18.3648L382.223 18.3648Z" fill="currentColor"/>
                        <path d="M1035.19 304.582C1033.33 320.991 1029.01 337.024 1022.36 352.139C1009.52 379.813 988.799 403.08 962.787 419.018C936.775 434.955 906.634 442.854 876.149 441.722C854.733 441.769 833.499 437.792 813.551 429.999C787.268 420.374 764.265 403.471 747.227 381.264C730.19 359.057 719.821 332.461 717.332 304.582H595.675C599.284 374.426 628.222 440.56 677.074 490.606C702.947 517.175 733.912 538.253 768.117 552.581C802.322 566.909 839.065 574.193 876.149 573.996C913.207 574.018 949.898 566.655 984.079 552.337C1018.26 538.019 1049.24 517.034 1075.22 490.606C1124.57 440.496 1153.71 373.948 1157.07 303.697L1035.19 304.582Z" fill="currentColor"/>
                        <path d="M2388.89 233.586L2675.56 233.586V341.087H2388.89V556.308H2256.4V18.3648L2388.89 18.3648V233.586Z" fill="currentColor"/>
                        <path d="M2675.56 132.497L2421.41 132.497V18.3613L2675.56 18.3613V132.497Z" fill="currentColor"/>
                        <path d="M2421.41 556.308H2675.56V442.172H2421.41V556.308Z" fill="currentColor"/>
                    </svg>
                </a>
            </div>  
            <div className="nav-mid">
                {
                    NavLink.map((item, i) => {
                        return(
                            <a href={item.link} key={i} className="nav-mid-item p-r">
                                {item.text}
                            </a>
                        )
                    })
                }
            </div>
            <a href="tel:+919656922212" className="nav-right">
                <div className="nav-right-wrapper">
                    <div className="nav-right-text">
                        <p className="p-r exclusion">
                            Book an Appointment
                        </p>
                    </div>
                    <div className="nav-right-arrow" style={{}}>
                        <p className="p-r" style={{width:'100%', position:'relative', top:'-2%', left:'8%'}}>
                            { arrow }
                        </p>
                    </div>
                </div>
            </a>
            {/* Hamburger */}
            <div className="nav-hb" style={{display:'none'}}>
                <div onClick={handleHbClick} className="nav-hb-wrapper">
                    <div className="hb-line line-top" style={{top: !hbActive ? '40%':'50%', transitionDelay: !hbActive ? '':'500ms', background: !hbActive ? '#FFF':'#000'}} />
                    <div className="hb-line line-mid" style={{width: !hbActive ? '100%':'0%', transitionDelay: !hbActive ? '500ms':''}} />
                    <div className="hb-line line-bottom" style={{top: !hbActive ? '60%':'50%', transitionDelay: !hbActive ? '':'500ms', background: !hbActive ? '#FFF':'#000'}} />
                </div>
            </div>
            {/* Hamburger Inner */}
            <div className="hb-inner" style={{top: !hbActive ? '-150%':'0%', transitionDelay: !hbActive ? '':'1000ms'}}>
                <div className="hb-inner-wrapper"> 
                    {
                        NavLink.map((item, i) => {
                            return(
                                <a className="hb-inner-item black-txt p-r" href={item.link} key={i}>
                                    {item.text}
                                </a>
                                // +91-7025576677
                            )
                        })
                    }
                    <a className="hb-inner-item black-txt p-r" href='tel: +91-7025576677'>
                        Book an appointment
                    </a>
                </div>
            </div>
        </nav>
    )
}