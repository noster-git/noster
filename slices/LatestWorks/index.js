import WorksGrid from "@/app/Component/WorksGrid/WorksGrid";
import { toWorkCards } from "@/app/lib/workCards";

// How many of the newest projects the home page shows; /works shows them all.
const HOME_WORKS_COUNT = 15;

/**
 * The latest projects (last added first), followed by a link to /works.
 *
 * @typedef {import("@prismicio/client").Content.LatestWorksSlice} LatestWorksSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LatestWorksSlice>} LatestWorksProps
 * @param {LatestWorksProps}
 */
export default function LatestWorks({ slice }) {
  const arrow = "->";
  return (
    <div data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <WorksGrid works={toWorkCards(slice.items).slice(0, HOME_WORKS_COUNT)} />
      <div className="next-project-cta all-works-cta snow">
        <div className="b-scene-cta">
          <a href="/works" className="b-scene-cta-text p-26">
            {slice.primary.button_text || "View all projects"} {arrow}
          </a>
        </div>
      </div>
    </div>
  );
}
