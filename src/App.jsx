import { useEffect, useState } from "react";
import "./App.css";
import LetterDensity from "./components/LetterDensity";
import StatisticsCards from "./components/StatisticsCard";
import TextArea from "./components/Textarea";
import TextAreaSettings from "./components/TextareaSettings";
import LogoApp from "./images/app-logo-navbar.svg";
import DarkTheme from "./images/dark-theme.svg";
import LightTheme from "./images/light-theme.svg";

const App = () => {
  let [text, setText] = useState("");
  let [excludeSpaces, setExcludeSpaces] = useState(false);
  let [hasCharacterLimit, setHasCharacterLimit] = useState(false);
  let [characterLimit, setCharacterLimit] = useState(undefined);
  let [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <>
      <div className="navbar-section">
        <div className="navbar-logo">
          <img src={LogoApp} />
          <p>Character Counter</p>
        </div>
        <button
          className="switch-theme"
          onClick={() => setDarkTheme((prev) => !prev)}
        >
          <img src={darkTheme ? DarkTheme : LightTheme} />
        </button>
      </div>
      <h1 className="title">Analyze your text in real-time.</h1>
      <TextArea
        text={text}
        setText={setText}
        hasCharacterLimit={hasCharacterLimit}
        characterLimit={characterLimit}
      />

      <TextAreaSettings
        text={text}
        excludeSpaces={excludeSpaces}
        setExcludeSpaces={setExcludeSpaces}
        hasCharacterLimit={hasCharacterLimit}
        setHasCharacterLimit={setHasCharacterLimit}
        characterLimit={characterLimit}
        setCharacterLimit={setCharacterLimit}
      />

      <StatisticsCards text={text} excludeSpaces={excludeSpaces} />

      <LetterDensity text={text} />
    </>
  );
};

export default App;
