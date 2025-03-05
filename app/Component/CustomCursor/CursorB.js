import { PrismicNextImage } from "@prismicio/next"
import Image from "next/image"

export default function CursorB({ image }){
    const arrow = '->'

    return(
        <div className="cursor-b-img-outer">
            <div style={{position:'relative', height:'100%', width:'100%'}}>
                <PrismicNextImage style={{height:'100%', width:'100%', objectFit:'cover', position:'absolute', top:'0', left:'0'}} 
                    height={1000} width={1000} 
                    field={image} alt="img"
                    imgixParams={{ar:'3:2'}}
                    loading="eager"
                    priority={true} />
            </div>
            <div style={{height:'100%', width:'100%', display:'flex', alignItems:'center', justifyContent:'center', position:'absolute', top:'0', left:'0'}}>
            <div className="cursor-B">
                <div className="cursor-B-bg-wrapper">
                    <div className="cursor-B-text-wrapper">
                        <p className="cursor-B-text cta-sml" style={{color:''}}>
                            View
                            <div className="cursor-B-arrow-wrapper">
                                <div className="cursor-B-arrow">
                                    {arrow}
                                </div>
                            </div>
                        </p>
                    </div>
                    <div className="cursor-B-bg" style={{width:''}} />
                    </div>
                </div>
            </div>
        </div>
    )
}