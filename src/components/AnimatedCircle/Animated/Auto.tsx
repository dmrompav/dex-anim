import { useEffect, useRef } from "react";
import { Svg } from "../../Svg/Svg";
import cls from "./Auto.module.scss";
import autoSvg from "./assets/auto.svg?raw";

const STEPS = [0, 400, 800, 1200, 1600, 2400];
const CLASSES = [
  cls.Step_1,
  cls.Step_2,
  cls.Step_3,
  cls.Step_4,
  cls.Step_5,
  cls.Step_6,
];

export const Auto = () => {
  const ref = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);

  const setOnly = (el: HTMLElement, kls: string) => {
    CLASSES.forEach((c) => el.classList.remove(c));
    el.classList.add(kls);
  };

  const animate = () => {
    const el = ref.current;
    if (!el) return;
    timers.current.forEach(clearTimeout);
    timers.current = [];

    CLASSES.forEach((kls, i) => {
      timers.current.push(window.setTimeout(() => setOnly(el, kls), STEPS[i]));
    });
  };

  useEffect(() => {
    animate();
    const interval = setInterval(() => {
      animate();
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className={`${cls.Wrapper} ${cls.Step_5}`}>
      <div className={cls.OverflowWidth}>
        <div className={cls.Carousel}>
          <Svg className={cls.Svg} svg={autoSvg} />
        </div>
      </div>
    </div>
  );
};
