import { useState } from "react";
import { Svg } from "../Svg/Svg";
import cls from "./AnimatedCircleWrapper.module.scss";
import { AnimationFilters, type Animation } from "./AnimationFilters";

import ring from "./assets/ring.svg?raw";
import upShadow from "./assets/up-shadow.svg?raw";
import ellipseShadow from "./assets/ellipse-shadow.svg?raw";
import raysLeft from "./assets/rays-left.svg?raw";
import raysRight from "./assets/rays-right.svg?raw";
import shapeLeft from "./assets/shape-left.svg?raw";
import shapeRight from "./assets/shape-right.svg?raw";

export const AnimatedCircleWrapper = () => {
  const [animation, setAnimation] = useState<Animation>("Filter");

  return (
    <div className={`reveal ${cls.Wrapper}`}>
      <div className={cls.Rays}>
        <Svg svg={raysLeft} className={`reveal ${cls.Ray_left}`} />
        <Svg svg={raysRight} className={`reveal ${cls.Ray_right}`} />
        <Svg svg={shapeLeft} className={`reveal ${cls.Shape_left}`} />
        <Svg svg={shapeRight} className={`reveal ${cls.Shape_right}`} />
        <img src="/icons/sq-1.png" className={`reveal ${cls.Sq_1}`} />
        <img src="/icons/sq-2.png" className={`reveal ${cls.Sq_2}`} />
        <img src="/icons/sq-3.png" className={`reveal ${cls.Sq_3}`} />
        <img src="/icons/sq-4.png" className={`reveal ${cls.Sq_4}`} />
        <img src="/icons/sq-5.png" className={`reveal ${cls.Sq_5}`} />
        <img src="/icons/card1.png" className={`reveal ${cls.Sell_1}`} />
        <img src="/icons/card2.png" className={`reveal ${cls.Sell_2}`} />
        <img src="/icons/card3.png" className={`reveal ${cls.Sell_3}`} />
        <img src="/icons/card4.png" className={`reveal ${cls.Sell_4}`} />
        <img src="/icons/card5.png" className={`reveal ${cls.Sell_5}`} />
      </div>

      <div className={cls.Before}>
        <Svg svg={ellipseShadow} className={cls.Before__Ellipse_1} />
        <Svg svg={ellipseShadow} className={cls.Before__Ellipse_2} />
      </div>
      <div className={cls.Ellipse}></div>
      <div className={cls.Ring}>
        <Svg svg={ring} />
      </div>
      <div className={cls.After}>
        <Svg svg={upShadow} />
      </div>

      <AnimationFilters value={animation} onChange={setAnimation} />
    </div>
  );
};
