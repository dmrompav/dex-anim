import { useEffect, useRef } from "react";
import cls from "./Strategy.module.scss";
import { BotSwitch } from "../../BotSwitch/BotSwitch";

const STEPS = [0, 400, 800, 1200, 1600, 2000, 2400, 2800];
const CLASSES = [
  cls.Step_1,
  cls.Step_2,
  cls.Step_3,
  cls.Step_4,
  cls.Step_5,
  cls.Step_6,
  cls.Step_7,
  cls.Step_8,
];

export const Strategy = () => {
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
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className={`${cls.Wrapper} ${cls.Step_1}`}>
      <div className={`${cls.Layout} ${cls.Layout_1}`}>
        <div className={cls.Title}>Take Profit</div>
        <div className={cls.Percent}>200%</div>
        <div className={cls.Carousel}>
          <img className={cls.Carousel_Image} src="icons/carousel.png" />
          <img
            className={cls.Carousel_Image_Active}
            src="icons/carousel-active.png"
          />
        </div>
      </div>
      <div className={`${cls.Layout} ${cls.Layout_2}`}>
        <div className={cls.Title}>Buy at DIP</div>
        <div className={cls.Percent}>20%</div>
      </div>
      <div className={cls.Blur}></div>
      <BotSwitch />
    </div>
  );
};
