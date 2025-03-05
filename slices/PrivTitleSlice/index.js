import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.PrivTitleSliceSlice} PrivTitleSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivTitleSliceSlice>} PrivTitleSliceProps
 * @param {PrivTitleSliceProps}
 */
const PrivTitleSlice = ({ slice }) => {
  return (
    <section className="priv-title-slice"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
        <div className="p30 haffer-R" style={{color:'black'}}>
          <PrismicRichText field={slice.primary.title} />
        </div>
    </section>
  );
};

export default PrivTitleSlice;
