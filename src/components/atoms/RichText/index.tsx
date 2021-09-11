import React from "react";
import { RichText as GraphCMSRichText } from "@graphcms/rich-text-react-renderer";
import { RichTextProps } from "@graphcms/rich-text-types";
import Link from "@/root/components/atoms/Link";
import Image from "next/image";

const RichText = ({ renderers, ...rest }: RichTextProps) => {
  return (
    <GraphCMSRichText
      {...rest}
      renderers={{
        a: ({ children, openInNewTab, href, rel, ...rest }) => {
          if (href.match(/^https?:\/\/|^\/\//i)) {
            return (
              //eslint-disable-next-line react/jsx-no-target-blank
              <a
                href={href}
                target={openInNewTab ? "_blank" : "_self"}
                rel={openInNewTab ? rel || "noopener noreferrer" : undefined}
                {...rest}
              >
                {children}
              </a>
            );
          }

          return (
            <Link href={href}>
              <a {...rest}>{children}</a>
            </Link>
          );
        },
        img: (props) => {
          return (
            <Image
              src={props.src}
              alt={props.altText}
              width={props.width}
              height={props.height}
            />
          );
        },
        p: ({ children }) => {
          return <p>{children}</p>;
        },
        class: ({ className, children }) => {
          switch (className) {
            case "section": {
              return <section className='py-8'>{children}</section>;
            }
            default: {
              return <div className={className}>{children}</div>;
            }
          }
        },
        ...renderers
      }}
    />
  );
};

export default RichText;
