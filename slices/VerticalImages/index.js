/**
 * @typedef {import("@prismicio/client").Content.VerticalImagesSlice} VerticalImagesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VerticalImagesSlice>} VerticalImagesProps
 * @param {VerticalImagesProps}
 */
const VerticalImages = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for vertical_images (variation: {slice.variation})
      Slices
    </section>
  );
};

export default VerticalImages;
