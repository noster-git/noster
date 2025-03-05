import { PrismicRichText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.PrivTextSliceBSlice} PrivTextSliceBSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivTextSliceBSlice>} PrivTextSliceBProps
 * @param {PrivTextSliceBProps}
 */
const PrivTextSliceB = ({ slice }) => {
  return (
    <section className="priv-text-slice-B haffer-R" style={{color:'black'}}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
        <div className="priv-text-slice-A-title">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="priv-text-sub-text">
          <PrismicRichText field={slice.primary.subtext} />
        </div>
        <div className="priv-bullets">
          <PrismicRichText field={slice.primary.bullet_points} />
        </div>
    </section>
  );
};

export default PrivTextSliceB;
