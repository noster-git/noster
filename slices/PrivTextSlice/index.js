import { PrismicRichText } from "@prismicio/react";
/**
 * @typedef {import("@prismicio/client").Content.PrivTextSliceSlice} PrivTextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PrivTextSliceSlice>} PrivTextSliceProps
 * @param {PrivTextSliceProps}
 */
const PrivTextSlice = ({ slice }) => {
  return (
    <section className="priv-text-slice"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
        <div className="p-tag black-txt haffer-R">
          <PrismicRichText field={slice.primary.text} />
        </div>
    </section>
  );
};

export default PrivTextSlice;
