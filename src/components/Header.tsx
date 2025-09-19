"use client";
import Link from "next/link";
import classes from "./Header.module.css";
import { Burger, Drawer, Text } from "@mantine/core";
import { useState } from "react";
import { usePathname } from "next/navigation";
import path from "path";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className={classes.header}>
      <Link
        href="/"
        className={`${classes.logo} ${classes.link} ${
          isActive("/") ? classes.active : ""
        }`}
      >
        <Text className={classes.title}>MOHAMED HASSAN</Text>
      </Link>

      <div className={classes.headerLinks}>
        <Link
          href="/about"
          className={`${classes.link} ${
            isActive("/about") ? classes.active : ""
          }`}
        >
          About
        </Link>

        <Link
          href="/previous-work"
          className={`${classes.link} ${
            isActive("/previous-work") ? classes.active : ""
          }`}
        >
          Previous Work
        </Link>

        <Link
          href="/contact"
          className={`${classes.link} ${
            isActive("/contact") ? classes.active : ""
          }`}
        >
          Contact
        </Link>
      </div>

      <div className={classes.headerLinksMobile}>
        <Burger size="lg" opened={isOpen} onClick={toggle} />
      </div>

      <Drawer
        opened={isOpen}
        onClose={toggle}
        title={
          <Link href="/" className={classes.link}>
            <Text className={classes.title}>MOHAMED HASSAN</Text>
          </Link>
        }
        size="100%"
        closeButtonProps={{
          size: 60,
          style: {
            marginRight: "1rem",
            color: "black",
          },
        }}
      >
        <div className={classes.drawerLinks}>
          <Link href="/about" className={classes.link} onClick={toggle}>
            About
          </Link>

          <Link href="/previous-work" className={classes.link} onClick={toggle}>
            Previous Work
          </Link>

          <Link href="/contact" className={classes.link} onClick={toggle}>
            Contact
          </Link>
        </div>
      </Drawer>
    </nav>
  );
}
