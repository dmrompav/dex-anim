import { Header } from "./components/Header/Header";
import cls from "./App.module.scss";
import { Background } from "./components/Background/Background";
import { Hero } from "./components/Hero/Hero";

export const App = () => {
  return (
    <>
      <Background />
      <div className={cls.Wrapper}>
        <Header />
        <main className={cls.Main}>
          <Hero />
        </main>
      </div>
    </>
  );
};
