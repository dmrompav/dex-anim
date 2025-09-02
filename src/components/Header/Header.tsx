import { Svg } from "../Svg/Svg";
import cls from "./Header.module.scss";
import logoFire from "./assets/logoFire.svg?raw";

export const Header = () => {
  return (
    <header className={cls.Header}>
      <h1 className={cls.Logo}>
        <Svg svg={logoFire} className={cls.LogoIcon} />
        <div>All Bots</div>
      </h1>
    </header>
  );
};
