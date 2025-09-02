import { Svg } from "../Svg/Svg";
import cls from "./Background.module.scss";

import ellipse from "./assets/ellipse.svg?raw";
import star from "./assets/star.svg?raw";
import vector from "./assets/vector.svg?raw";

export const Background = () => {
  return (
    <div className={cls.Background}>
      <div className={cls.EllipseWrapper}>
        <Svg svg={ellipse} className={cls.Ellipse} />
      </div>
      <Svg svg={star} className={cls.Star} />
      <Svg svg={vector} className={cls.Vector} />
    </div>
  );
};
