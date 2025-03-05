import { PrismicLink } from "@prismicio/react"

/**
 * @typedef {import("@prismicio/client").Content.NextProjectLinkSlice} NextProjectLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NextProjectLinkSlice>} NextProjectLinkProps
 * @param {NextProjectLinkProps}
 */
export default function NextProjectLink({slice}) {
  let arrow = "->"
  return(
    <div className="next-project-cta">
      <div className="b-scene-cta">
        <a href={`/works/${slice.primary.cta_link.uid}`} className="b-scene-cta-text p-26">View Next Project {arrow}</a>
      </div>
    </div>
  )
}
