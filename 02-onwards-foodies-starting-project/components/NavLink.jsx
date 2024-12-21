"use client";

import classes from "./main-header.module.css";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <div>
      <Link
        className={pathname.startsWith(href) ? classes.active : undefined}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
}
