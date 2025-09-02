import { AnimatedCircle } from "../AnimatedCircle/AnimatedCircle";
import { BotSwitch } from "../BotSwitch/BotSwitch";
import { Button } from "../Button/Button";
import { Svg } from "../Svg/Svg";
import cls from "./Hero.module.scss";
import robot from "@/assets/robot.svg?raw";

export const Hero = () => {
  return (
    <div className={cls.Hero}>
      <div className={cls.Title}>
        <div className={cls.Title__sub}>Smart filters. Trusted sources.</div>
        <div className={[cls.Title__main, cls.Title__main_1].join(" ")}>
          Let agents cut noise in
        </div>
        <div className={[cls.Title__main, cls.Title__main_2].join(" ")}>
          <BotSwitch value={true} />
          <div>Auto Trading!</div>
        </div>
      </div>

      <Button>
        <div className={cls.Button__text}>Create AutoBot</div>
        <Svg svg={robot} className={cls.Button__icon} />
      </Button>

      <AnimatedCircle />
    </div>
  );
};
