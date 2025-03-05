import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.PrivTextSliceASlice} PrivTextSliceASlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivTextSliceASlice>} PrivTextSliceAProps
 * @param {PrivTextSliceAProps}
 */
const PrivTextSliceA = ({ slice }) => {
  return (
    <section className="priv-text-slice-A haffer-R" style={{color:'black'}}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
        <div className="priv-text-slice-A-title">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="priv-text-slice-A-desc">
          <PrismicRichText field={slice.primary.description} />
        </div>
    </section>
  );
};

export default PrivTextSliceA;
