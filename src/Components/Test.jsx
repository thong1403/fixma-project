import "simple-reveal/index.css";

import { SimpleReveal, useSimpleReveal } from "simple-reveal";

export default function Test() {
  const { ref, cn } = useSimpleReveal();

  return (
    <div>
      <h1 ref={ref} className={cn()}>
        Title
      </h1>
      {new Array(100).fill("").map((_, i) => (
        <SimpleReveal
          key={i}
          delay={i * 100}
          render={({ ref, cn }) => (
            <h1 ref={ref} className={cn()}>
              Hello SimpleReveal!
            </h1>
          )}
        />
      ))}
    </div>
  );
}