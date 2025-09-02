import cls from "./AnimationFilters.module.scss";

export type Animation = "Filter" | "Strategy" | "Auto";
const animations: Animation[] = ["Filter", "Strategy", "Auto"];

interface IAnimationFiltersProps {
  value: Animation;
  onChange: (newValue: Animation) => void;
}

export const AnimationFilters = ({
  value = "Filter",
  onChange,
}: IAnimationFiltersProps) => {
  const wrapperActiveClass = (() => {
    if (value === "Filter") {
      return cls.Wrapper__active_Filter;
    }
    if (value === "Strategy") {
      return cls.Wrapper__active_Strategy;
    }
    if (value === "Auto") {
      return cls.Wrapper__active_Auto;
    }
  })();

  return (
    <div className={[cls.Wrapper, wrapperActiveClass].join(" ")}>
      {animations.map((item) => (
        <button
          key={item}
          className={[
            cls.Button,
            item === value ? cls.Button__active : "",
          ].join(" ")}
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
