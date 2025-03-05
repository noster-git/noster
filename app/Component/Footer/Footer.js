'use client'

import { useEffect, useState } from "react"
import CTA from "../CTA/CTA"
import FooterCTA from "../CTA/FooterCTA"
import { usePathname } from "next/navigation"
import Arrow from "../Arrow"

export default function Footer({style}){

    const [ formFocus, setFormFocus ] = useState(false)
    const pathName = usePathname()

    const address = [
        {
            location: 'Trivandrum',
            description: 'The Atomic, Near Technopark Phase 1 Kazhakootam, 695582',
            contact: '+91 9496434303',
            contactLink: '+919496434303',
            href: 'https://www.google.com/maps/place/The+Atomic/@8.5563022,76.8741509,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05bfe3855db083:0xc4ba14818788b1cf!8m2!3d8.5562969!4d76.8767312!16s%2Fg%2F11r40tpmcw?entry=ttu'
        },
        {
            location: 'Kochi',
            description: 'Plot no. 16, Ground floor, Geo infopark, infopark campus, Kakkanad Kochi 682042',
            contact: '+91 9656922212', // SHAFEEQ NUMBER
            contactLink: '+919656922212',
            href: 'https://www.google.com/maps/search/Noster+Associates+Pvt+Ltd+Emaar+Tower+at+TV+Centre,+Poyyachira,+Kakkanad,+CSEZ+PO+PIN+682037/@10.0047621,76.3380979,16z/data=!3m1!4b1?entry=ttu'
        },
        {
            location: 'Hyderabad',
            description: 'Plot B7, Road Number 92, Journalist Colony, Film Nagar Jubilee Hills Hyderabad, Telengana 500033',
            contact: '+91 9544551888',
            contactLink: '+919544551888',
            href: 'https://www.google.com/maps/search/NOSTER+CONCEPTS+PRIVATE+LIMITED+Plot+No-219,+D+No-8-2-293%2F82,+Road+No-78,+Jubilee+Hills,+Hyderabad,+Hyderabad,+Hyderabad,+Telangana,+India,+500033/@17.4163599,78.4008591,18z/data=!3m1!4b1?entry=ttu'
        },
    ]

    const socials = [{text:'Instagram', link:'https://www.instagram.com/noster_associates/'},{text:'Linked-in', link:'https://in.linkedin.com/company/noster-associates'}]


    const handleFormFocus = () => {
        setFormFocus(true)
    }

    const handleFormBlur = () => {
        setFormFocus(false)
    }


    let FooterLeft = [ // Footer Left Info
        {
            title: 'All rights reserved',
            list: [{text:'Noster Associates (c) 2024'}]
        },
        // {
        //     title:'Company',
        //     list:[
        //         // {text:'Work', link:'/works'},
        //         // {text:'About', link:'/'},
        //         // {text:'Blog', link:'/'}
        //     ]
        // },
        {
            title:'Follow us',
            list:[{text:'Instagram', link:'https://www.instagram.com/noster_associates/'},{text:'Linked-in', link:'https://in.linkedin.com/company/noster-associates'}]
        }
    ]

    let Text = 'Sign up with your email address to recieve news and updates'

    {/* <div style={{position:'absolute', height:'1px', width:'97%', top:'0', left:'50%', transform:'translateX(-50%)', background:'#000', display: pathName !== "/" ? 'none':'none'}} />
    <div className="footer-left">
        {
            FooterLeft.map((item, i) => {
                return(
                    <div className="footer-left-item" key={i}>   
                        <p className="p-r" style={{color:'black'}}>
                            {item.title}
                        </p>
                        <ul className="footer-left-list-items">
                            {
                                item.list.map((data, i) => {
                                    return(
                                        <a href={data.link} style={{color:'black'}} className="footer-left-list-item" key={i}>
                                            {data.text}
                                        </a>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            })
        }
    </div>
    <div className="footer-right">
        <div className="footer-right-top">
            <div className="footer-right-text-A">
                <p className="p-r " style={{opacity:'0'}}>
                    {Text}
                </p>
            </div>
            <div className="footer-right-text-B">
                <a href="/privacy_policy" style={{color:'black'}} className="">
                    Privacy Policy
                </a>
            </div>
        </div>
        <div className="footer-right-bottom" style={{border: '1px red solid', display: 'none'}}>
            <form className="footer-form">
                <div className="footer-form-wrapper" style={{display:'none'}}>
                    <input type="email" onBlur={handleFormBlur} onFocus={handleFormFocus} />
                    <div className="footer-form-border">
                        <div style={{height:'100%', width:'100%', position:'relative'}}>
                            <div style={{width: formFocus ? '100%':'0'}} className="footer-form-border-inner" />
                        </div>
                    </div>
                   <div style={{position:'absolute', right:'0', bottom:'40%'}}>
                        <p className="" style={{fontSize:'0.9em', color:'black'}}>
                            Sign up
                        </p>
                   </div>
                </div>
            </form>
        </div>
    </div> */}

    return(
        <footer className="footer" style={{position:'relative', background: '#FFF'}}>
            <div
                className='f-left'
            >
                <div className="all-rights-desk">
                    <p className="footer-texts haffer-R">
                        All rights reserved
                    </p>
                    <p className="footer-texts haffer-R">
                        Noster Associates (c) 2024
                    </p>
                </div>
                <div 
                    className='f-mid'
                >
                    {/* Map items here */}
                    {address.map(({location, href, description, contact, contactLink}) => (    
                        <div
                            className="address-item"
                            key={location}
                        >
                            <p className="footer-texts haffer-R">
                                <b>{location}</b>
                            </p>
                            <p className="footer-texts address-description haffer-R" style={{color: 'grey'}}>
                                {description}
                            </p>
                            {location === "Trivandrum" && (
                                <a 
                                className="footer-texts haffer-R" 
                                href={href} 
                                target="_blank"
                                style={{textDecoration: 'underline', fontWeight: '400', display: 'flex', alignItems:'center', gap:'0.26em', marginBottom: '0.6em'}}
                            >
                                <b>View directions</b><div className="footer-arrow"><Arrow /></div>
                            </a>
                            )}
                            <a 
                                className="footer-texts haffer-R" 
                                href={`tel:${contactLink}`} 
                                target="_blank"
                                style={{fontWeight: '400', width: '100%', marginTop: '0.1em', display: 'flex', alignItems:'center', gap:'0.26em'}}
                            >
                                <b><u>{contact}</u></b> (Sales)
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div
                className='f-right'
            >
                <div>
                    <p className="footer-texts haffer-R" style={{marginBottom: '0.8em'}}>
                        Follow us
                    </p>
                    <ul 
                        style={{display: 'flex', flexDirection: 'column', gap: '0.3em'}}
                    >
                    {socials.map(item => <a className="footer-texts haffer-R" target="_blank" style={{textDecoration: 'underline'}} href={item.link} key={item.text}>{item.text}</a>)}
                    </ul>
                    <div className="all-rights-mob">
                        <p className="footer-texts haffer-R">
                            All rights reserved
                        </p>
                        <p className="footer-texts haffer-R">
                            Noster Associates (c) 2024
                        </p>
                    </div>  
                </div>
                <a href="/privacy_policy" className="footer-texts haffer-R" style={{textDecoration: 'underline'}}>
                    Privacy Policy
                </a>
            </div>

        </footer>
    )
}