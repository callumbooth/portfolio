import React from "react";
import Link from "@/components/atoms/Link";
import { useRouter } from "next/router";
import GithubIcon from "@/components/icons/github";
import TwitterIcon from "@/components/icons/twitter";
import clsx from "clsx";

const navItems = [
  {
    name: "about",
    url: "/about",
    label: "Who am I"
  },
  {
    name: "projects",
    url: "/projects",
    label: "What I have done"
  },
  {
    name: "contact",
    url: "/contact",
    label: "How to get in touch"
  }
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="relative w-full flex flex-col min-h-full p-11 bg-white md:fixed md:top-0 md:left-0 md:bottom-0 md:w-100 md:overflow-y-auto">
      <div className="flex-initial pb-2.5">
        <Link href="/">
          <a className="w-full">
            <h1 style={{ lineHeight: "50px" }}>
              <span className="text-primary-main block">Callum</span>
              <span className="text-primary-500 block">Booth</span>
            </h1>
          </a>
        </Link>
      </div>
      <div className="leading-none pb-10">
        <h4 className="font-light">Software Engineer</h4>
      </div>
      <div className="pb-6 text-2xl">
        <Link href="https://twitter.com/showerg3l">
          <a
            className="first:pl-0 py-4 px-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="w-7 inline-block" fill="currentColor" />
          </a>
        </Link>
        <Link href="https://github.com/callumbooth">
          <a className="py-4 px-2" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="w-7 inline-block" fill="currentColor" />
          </a>
        </Link>
      </div>
      <div className="mb-auto pb-4">
        <div className="pb-4">
          <span className="text-primary-main">e: &nbsp;</span>
          <span className="font-bold">
            <a href="mailto:callumbooth@live.co.uk">callum-booth@live.co.uk</a>
          </span>
        </div>
      </div>
      <div className="text-2xl">
        <ul>
          {navItems.map((item, i) => {
            return (
              <li key={i} className="nav-item">
                <Link href={item.url}>
                  <a
                    className={clsx(
                      "relative strike-through",
                      item.url === router.pathname && "active"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
