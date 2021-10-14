// import { useTheme } from "next-themes";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavItem from "./NavItem";

const links = [
  // {
  //   path: "/about",
  //   label: "About",
  // },
  {
    path: "/research",
    label: "Research",
  },
  // {
  //   path: "/projects",
  //   label: "Projects",
  // },
  // {
  //   path: "/blog",
  //   label: "Blog",
  // },
  // {
  //   path: "/cv",
  //   label: "CV",
  // },
  // {
  //   path: "/misc",
  //   label: "Misc",
  // },
];

const Navbar = () => {
  // const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Brand */}
            <div className="flex items-center py-4 px-2">
              <Link href="/">
                <a className="font-semibold text-gray-500 text-lg">
                  Kiran Gadhave
                </a>
              </Link>
            </div>
          </div>
          {/* Nav Items */}
          <div className="hidden md:flex items-center space-x-3 ">
            {links.map((link) => (
              <NavItem
                key={link.label}
                path={link.path}
                label={link.label}
                isActive={link.path === router.pathname}
              />
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div
        className={clsx([
          "overflow-hidden",
          "transition-max-height",
          "duration-500",
          "ease-linear",
          {
            "max-h-0": !isMobileMenuOpen,
            "max-h-screen": isMobileMenuOpen,
          },
        ])}
      >
        <ul className="">
          {links.map((link) => (
            <NavItem
              key={link.label}
              path={link.path}
              label={link.label}
              isActive={link.path === router.pathname}
              isMobile
            />
          ))}
        </ul>
      </div>
      {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle to {theme === "dark" ? "light" : "dark"}
      </button> */}
    </nav>
  );
};

export default Navbar;
