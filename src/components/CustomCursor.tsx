"use client";

import { useEffect } from "react";
import styles from "./cursor.module.css";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(
      `.${styles.cursor}`
    ) as HTMLElement | null;

    const isTouchDevice = () =>
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      window.matchMedia("(max-width: 768px)").matches;

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.top = e.clientY - 20 + "px";
        cursor.style.left = e.clientX - 20 + "px";
      }
    };

    const spawnTapEffect = (x: number, y: number) => {
      const tapEffect = document.createElement("span");
      tapEffect.className = styles.tapEffect;
      tapEffect.style.left = `${x}px`;
      tapEffect.style.top = `${y}px`;
      document.body.appendChild(tapEffect);

      tapEffect.addEventListener(
        "animationend",
        () => {
          tapEffect.remove();
        },
        { once: true }
      );
    };

    const clickCursor = () => {
      if (cursor) {
        cursor.classList.add(styles.expand);
        setTimeout(() => {
          cursor.classList.remove(styles.expand);
        }, 500);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (isTouchDevice()) {
        spawnTapEffect(e.clientX, e.clientY);
        return;
      }

      clickCursor();
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
    document.addEventListener("pointerdown", handlePointerDown, {
      passive: true,
    });
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div className={styles.cursor}></div>;
}
