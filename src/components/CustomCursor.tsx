"use client";

import { useEffect } from "react";
import styles from "./cursor.module.css";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(
      `.${styles.cursor}`
    ) as HTMLElement | null;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.top = e.clientY - 20 + "px";
        cursor.style.left = e.clientX - 20 + "px";
      }
    };

    const clickCursor = () => {
      if (cursor) {
        cursor.classList.add(styles.expand);
        setTimeout(() => {
          cursor.classList.remove(styles.expand);
        }, 500);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button'], .pointer"
        )
      ) {
        cursor?.classList.add(styles.hovered);
      } else {
        cursor?.classList.remove(styles.hovered);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", clickCursor);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", clickCursor);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div className={styles.cursor}></div>;
}
