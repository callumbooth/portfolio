import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

const FramerLink = (props: LinkProps & { children: ReactNode }) => {
  return <Link scroll={false} {...props} />;
};

export default FramerLink;
