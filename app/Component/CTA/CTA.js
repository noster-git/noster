import { PrismicLink, PrismicRichText } from "@prismicio/react";


export default function CTA({ link, text }){
    let arrow = "->"
    return(
        <PrismicLink field={link}>
           <div style={{display:'flex', alignItems:'center'}}>
            <p className="cta">
                <p style={{display:'flex', alignItems:'center'}}>
                    <PrismicRichText field={text} />
                    <div style={{overflow:'hidden', height:'15px', display:'flex', alignItems:'center', justifyContent:'center', marginLeft:'0.25em'}}>
                        <div className="cta-arrow" style={{}}>
                            <div className="cta-arrow-A snow-txt" >
                                { arrow }
                            </div>
                        </div>
                    </div>
                </p>
            </p>
           </div>
        </PrismicLink>
    )
}