import { Svg } from "../Svg/Svg";
import robot from "@/assets/robot.svg?raw";
import cls from "./BotSwitch.module.scss";

export const BotSwitch = ({
  value = false,
  onChange,
}: {
  value?: boolean;
  onChange?: (v: boolean) => void;
}) => {
  return (
    <div
      className={[cls.Wrapper, value ? cls.Wrapper__checked : ""].join(" ")}
      onClick={() => onChange?.(!value)}
    >
      <Svg
        svg={robot}
        className={[cls.BotIcon, value ? cls.BotIcon__checked : ""].join(" ")}
      />
    </div>
  );
};
