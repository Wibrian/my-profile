import logoGithub from "../img/github-mark.svg";
import logoGithubWhite from "../img/github-mark-white.svg";
import { useState, useEffect } from "react";

export default function Footer() {
  const [isDarkest, setIsDarkest] = useState(() => localStorage.getItem("isDark") === "true");

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkest(localStorage.getItem("isDark"));
    };

    window.addEventListener("storage", handleThemeChange);
    console.log(handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <footer className="footer footer-center p-6 bg-primary text-primary-content">
      <aside>
        <p className="font-bold">Wibrian Alfathan Personal Profile</p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-2 cursor-pointer">
          <a href="##">
            <img src={isDarkest ? logoGithub : logoGithubWhite} alt="logo" srcSet="" className="w-6 h-6" />
          </a>
        </div>
      </nav>
    </footer>
  );
}
