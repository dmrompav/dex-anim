import type { Animation } from "./AnimationFilters";
import cls from "./Animated.module.scss";
import { Filter } from "./Animated/Filter";
import { Auto } from "./Animated/Auto";
import { Strategy } from "./Animated/Strategy";

export const Animated = ({ value }: { value: Animation }) => {
  return (
    <div className={cls.AnimatedRoot}>
      <div
        className={
          cls.AnimatedBlock + (value === "Filter" ? " " + cls.Active : "")
        }
      >
        <Filter />
      </div>
      <div
        className={
          cls.AnimatedBlock + (value === "Strategy" ? " " + cls.Active : "")
        }
      >
        <Strategy />
      </div>
      <div
        className={
          cls.AnimatedBlock + (value === "Auto" ? " " + cls.Active : "")
        }
      >
        <Auto />
      </div>
    </div>
  );
};
