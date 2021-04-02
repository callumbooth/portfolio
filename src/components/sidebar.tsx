import React from "react";
import Link from "@/components/atoms/Link";
import { useRouter } from "next/router";
import GithubIcon from "@/components/icons/github";
import TwitterIcon from "@/components/icons/twitter";

const navItems = [
  {
    name: "about",
    url: "/about",
    label: "Who am I",
  },
  {
    name: "projects",
    url: "/projects",
    label: "What I have done",
  },
  {
    name: "contact",
    url: "/contact",
    label: "How to get in touch",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="name">
        <Link href="/">
          <a>
            <h1>
              <span className="text-red d-block w-100">Callum</span>
              <span className="text-red-50 d-block w-100">Booth</span>
            </h1>
          </a>
        </Link>
      </div>
      <div className="job-title">
        <h4 className="text-light">Web Developer</h4>
      </div>
      <div className="socials">
        <Link href="https://twitter.com/showerg3l">
          <a className="twitter" target="_blank">
            <TwitterIcon className="w-7 inline-block" fill="currentColor" />
          </a>
        </Link>
        <Link href="https://github.com/callumbooth">
          <a className="twitter" target="_blank">
            <GithubIcon className="w-7 inline-block" fill="currentColor" />
          </a>
        </Link>
      </div>
      <div className="contact-info">
        <div className="email">
          <span className="text-red">e: &nbsp;</span>
          <span className="text-bold">
            <a href="mailto:callumbooth@live.co.uk">callum-booth@live.co.uk</a>
          </span>
        </div>
      </div>
      <div className="nav">
        <ul className="list-unstyled">
          {navItems.map((item, i) => {
            let additionalclasses = "";
            if (item.url === router.pathname) {
              additionalclasses = "active";
            }
            return (
              <li key={i} className="nav-item">
                <Link href={item.url}>
                  <a className={"nav-link " + additionalclasses}>
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
