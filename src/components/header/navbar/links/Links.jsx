"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLinks/NavLink";
import Image from "next/image";

const links = [
  {
    title: "Home",
    path: "/",
    active: false,
  },
  {
    title: "Inventory",
    path: "/used-cars",
    active: true,
  },
  {
    title: "Financing",
    path: "/financing",
    active: false,
  },
  {
    title: "Get Pre-Qualified",
    path: "/capital-one-qualified",
    active: false,
  },
  {
    title: "Car Buying Center",
    path: "/trade-appraisal",
    active: false,
  },
  {
    title: "Trade In",
    path: "/trade-in",
    active: false,
  },
  {
    title: "Contact us",
    path: "contact-us",
    active: false,
    subMenu: [
      {
        title: "Contact us",
        path: "/contact-us",
      },
      {
        title: "About us",
        path: "/about-us",
      },
    ],
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="menu">
        {links.map((link) => (
          <li
            key={link.title}
            className={`menu-item menu-item-child ${
              link.active ? "active" : ""
            }`}
            onClick={() => setOpen(false)}
          >
            <NavLink item={link} key={link.title} />
          </li>
        ))}
      </ul>
      <Image
        className={styles.menuButton}
        src="/images/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </>
  );
};

export default Links;
