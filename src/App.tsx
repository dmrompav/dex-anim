import { Header } from "./components/Header/Header";
import cls from "./App.module.scss";
import { Background } from "./components/Background/Background";
import { Hero } from "./components/Hero/Hero";
import { useEffect } from "react";

export const App = () => {
  // TODO: Вынести в хук - пока норм
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (ents) => {
        for (const e of ents) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

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
