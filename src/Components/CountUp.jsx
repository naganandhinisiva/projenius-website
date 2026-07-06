import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { animate } from "framer-motion";

export default function CountUp({
  to,
  duration = 2.5,
  delay = 0,
  suffix = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(0, to, {
  duration,
  delay,
  ease: "easeOut",
  onUpdate(value) {
    setDisplayValue(Math.floor(value));
  },
});
      return () => controls.stop();
    }
  }, [isInView, to, duration, delay]);

return (
  <span
    ref={ref}
    style={{
      display: "inline-block",
      fontSize: "60px",
      fontWeight: "800",
      color: "#ffffff",
      lineHeight: "1",
      letterSpacing: "-2px",
    }}
  >
    {displayValue}{suffix}
  </span>
);
}
