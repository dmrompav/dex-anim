import { useEffect, useRef } from "react";
import { Svg } from "../../Svg/Svg";
import cls from "./Auto.module.scss";
import autoSvg from "./assets/auto.svg?raw";

export const Auto = () => {
  const ref = useRef<HTMLDivElement>(null);

  const animate = () => {
    setTimeout(() => {
      ref.current?.classList.remove(cls.Step_6);
      ref.current?.classList.add(cls.Step_1);
    }, 0);
    setTimeout(() => {
      ref.current?.classList.remove(cls.Step_1);
      ref.current?.classList.add(cls.Step_2);
    }, 1000);
    setTimeout(() => {
      ref.current?.classList.remove(cls.Step_2);
      ref.current?.classList.add(cls.Step_3);
    }, 2000);
    setTimeout(() => {
      ref.current?.classList.remove(cls.Step_3);
      ref.current?.classList.add(cls.Step_4);
    }, 3000);
    setTimeout(() => {
      ref.current?.classList.remove(cls.Step_4);
      ref.current?.classList.add(cls.Step_5);
    }, 4000);
    setTimeout(() => {
      ref.current?.classList.remove(cls.Step_5);
      ref.current?.classList.add(cls.Step_6);
    }, 5000);
  };

  useEffect(() => {
    animate();
    const interval = setInterval(() => {
      animate();
    }, 6000);
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
