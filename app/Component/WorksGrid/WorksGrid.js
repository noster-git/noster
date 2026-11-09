'use client'
import { useEffect, useState } from "react";
import { PrismicNextImage } from "@prismicio/next";
import CursorA from "@/app/Component/CustomCursor/CursorA";

const PER_ROW = 3;

/**
 * Project cards. With a mouse: rows of three that expand on hover, alternating
 * left- and right-aligned. On phones the list below is stacked, and on touch
 * tablets it becomes a 3-column grid with every heading and description shown
 * (see "Works grid" in works.css). `works` comes from toWorkCards (app/lib/workCards.js).
 */
export default function WorksGrid({ works }) {
  useHoverCursor();

  const rows = [];
  for (let i = 0; i < works.length; i += PER_ROW) rows.push(works.slice(i, i + PER_ROW));

  return (
    <section className="works-grid snow">
      <CursorA />
      {rows.map((row, i) => (
        <Row key={row[0].uid} works={row} reverse={i % 2 === 1} />
      ))}
      <div className="works-showcase-left-mob works-grid-list snow">
        {works.map((work) => (
          <div className="works-grid-card" key={work.uid}>
            <CardImage work={work} />
            <CardText work={work} active />
          </div>
        ))}
      </div>
    </section>
  );
}

function Row({ works, reverse }) {
  const [active, setActive] = useState(0);

  return (
    <div className={reverse ? "works-showcase-right snow" : "works-showcase-left snow"}>
      {works.map((work, i) => (
        <div key={work.uid} onMouseOver={() => setActive(i)}
          className={active === i ? "fw-showcase-item expand-fw-showcase-item" : "fw-showcase-item"}>
          <CardImage work={work} />
          <CardText work={work} active={active === i} />
        </div>
      ))}
    </div>
  );
}

function CardImage({ work }) {
  return (
    <a href={`/works/${work.uid}`} className="fw-showcase-item-link" aria-label={work.name}>
      <PrismicNextImage
        style={{ height: '100%', width: '100%' }}
        sizes="100vw"
        imgixParams={{ ar: '3:2' }}
        field={work.image}
        fallbackAlt=""
        loader={undefined} />
    </a>
  );
}

function CardText({ work, active }) {
  return (
    <div className="fw-showcase-item-text-wrapper">
      <div className={active ? "fw-showcase-item-text-inner-wrapper active-inner-wrapper" : "fw-showcase-item-text-inner-wrapper"}>
        <div className="fw-showcase-item-c-name">
          <p className="black-txt">{work.name}</p>
        </div>
        <div className="fw-showcase-item-desc">
          <p className="black-txt">{work.description}</p>
        </div>
      </div>
    </div>
  );
}

// "View" cursor that follows the mouse over the card images (same behaviour as
// the original WorksShowcaseLeft/Right slices), with listeners cleaned up on unmount.
function useHoverCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-A');
    const cursorBg = document.querySelector('.cursor-A-bg');
    const textColor = document.querySelector('.cursor-A-text-wrapper');
    const textBorder = document.querySelector('.cursor-A-text');
    const textArrow = document.querySelector('.cursor-A-arrow');
    if (!cursor) return;

    const listeners = [];
    const on = (el, type, fn) => { el.addEventListener(type, fn); listeners.push(() => el.removeEventListener(type, fn)); };

    on(document, "mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const show = () => {
      cursor.classList.add('cursor-active');
      cursorBg.classList.add('cursor-A-bg-active');
      textColor.classList.add('cursor-A-text-active');
      textBorder.classList.add('cursor-A-text-u-active');
      textArrow.classList.add('cursor-A-arrow-reveal');
    };
    const hide = () => {
      cursor.classList.remove('cursor-active');
      cursorBg.classList.remove('cursor-A-bg-active');
      textColor.classList.remove('cursor-A-text-active');
      textBorder.classList.remove('cursor-A-text-u-active');
      textArrow.classList.remove('cursor-A-arrow-reveal');
    };

    document.querySelectorAll('.fw-showcase-item').forEach((el) => {
      on(el, "mouseenter", show);
      on(el, "mouseleave", hide);
    });
    document.querySelectorAll('.fw-showcase-item-text-wrapper').forEach((el) => {
      on(el, "mouseenter", () => cursor.classList.remove('cursor-active'));
      on(el, "mouseleave", () => cursor.classList.add('cursor-active'));
    });

    return () => listeners.forEach((off) => off());
  }, []);
}
