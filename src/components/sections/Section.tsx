import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  contained?: boolean;
}

export function Section({
  as: Comp = "section",
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Comp
      className={[
        "w-full px-4 sm:px-6 lg:px-8",
        contained ? "mx-auto max-w-7xl" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Comp>
  );
}

