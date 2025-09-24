import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = ({ section, onSectionChange }) => {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  // Optional: fix the scroll fill to the top
  data.fill.classList.add("top-0", "absolute");

  // Animate to current section on section change
  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    // Compute the current section based on scroll
    const curSection = Math.round(data.scroll.current * (data.pages - 1));

    if (curSection !== section) {
      onSectionChange(curSection);
    }

    lastScroll.current = data.scroll.current;
  });

  return null;
};
