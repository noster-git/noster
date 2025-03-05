export default function FooterCTA({ text }){
    return(
        <div >
           <div style={{display:'flex', alignItems:'center'}}>
            <p className="cta">
                <p style={{display:'flex', alignItems:'center'}}>
                    {text}
                    <div style={{overflow:'hidden', height:'15px', display:'flex', alignItems:'center', justifyContent:'center', marginLeft:'0.25em'}}>
                        <div className="cta-arrow" style={{height:'2px', width:'12px'}}>
                            <div className="cta-arrow-A" />
                        </div>
                    </div>
                </p>
            </p>
           </div>
        </div>
    )
}