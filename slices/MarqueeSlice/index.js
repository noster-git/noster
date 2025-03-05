import Marquee from "@/app/Component/slices/marquee/marquee";

/**
 * @typedef {import("@prismicio/client").Content.MarqueeSliceSlice} MarqueeSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MarqueeSliceSlice>} MarqueeSliceProps
 * @param {MarqueeSliceProps}
 */
const MarqueeSlice = ({ slice }) => {
  return (
    <>
    <Marquee slice={slice} />
    </>
  );
};

export default MarqueeSlice;
