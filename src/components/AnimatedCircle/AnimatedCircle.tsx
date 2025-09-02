import { Svg } from "../Svg/Svg";
import cls from "./AnimatedCircle.module.scss";

import upShadow from "./assets/up-shadow.svg?raw";

export const AnimatedCircle = () => {
  return (
    <div className={cls.Wrapper}>
      <div className={cls.Before}></div>
      <div className={cls.Ellipse}></div>
      <div className={cls.After}>
        <Svg svg={upShadow} />
      </div>
    </div>
  );
};
