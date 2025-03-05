import { PrismicRichText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.PrivSubTitleSliceSlice} PrivSubTitleSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivSubTitleSliceSlice>} PrivSubTitleSliceProps
 * @param {PrivSubTitleSliceProps}
 */
const PrivSubTitleSlice = ({ slice }) => {
  return (
    <section className="priv-subtitle-slice" style={{color:'black'}}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
        <div>
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
    </section>
  );
};

export default PrivSubTitleSlice;
