/**
 * @typedef {import("@prismicio/client").Content.FeaturedWorksTitleSlice} FeaturedWorksTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturedWorksTitleSlice>} FeaturedWorksTitleProps
 * @param {FeaturedWorksTitleProps}
 */

import { PrismicRichText } from "@prismicio/react";
const FeaturedWorksTitle = ({ slice }) => {
  return (
    <section
      className="featured-title snow"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="eyebrow black-txt">
        <div className="eyebrow-title">
          <h1 className="h1-big" style={{display:'flex', alignItems:'center', justifyContent:'flex-start'}}>
          :<PrismicRichText field={slice.primary.title} />
          </h1>
        </div>
        <div className="eyebrow-cta" style={{display:'none'}}>
          <a href={'/works'}>
            <div style={{display:'flex', alignItems:'center'}}>
              <p className="cta">
                  <p style={{display:'flex', alignItems:'center'}}>
                      <p>
                        View Allasd
                      </p>
                      <div style={{overflow:'hidden', height:'15px', display:'flex', alignItems:'center', justifyContent:'center', marginLeft:'0.25em'}}>
                          <div className="cta-arrow" style={{}}>
                              <div className="cta-arrow-A snow-txt" >
                                  {/* { arrow } */}
                              </div>
                          </div>
                      </div>
                  </p>
              </p>
            </div>
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksTitle;
