import { useState } from "react";
import chevronDown from "../images/chevron-down.svg";
import chevronUp from "../images/chevron-up.svg";

const LetterDensity = ({ text }) => {
  let [showMore, setShowMore] = useState(false);
  const lettersReport = getLetterReport(text);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  console.log(lettersReport);
  return (
    <div>
      <h2 className="title-letter-density">Letter Density</h2>
      {text.length === 0 ? (
        <p>No text found, start typing to see letter density</p>
      ) : (
        lettersReport.map((letterData, index) => {
          if (showMore === false && index >= 5) return null;

          return (
            <div className="letter-data-card">
              <p className="letter">{letterData.letter}</p>
              <progress
                value={letterData.percentage}
                max="100"
                className="letter-progress"
              />
              <p className="stats">
                {letterData.numberOfOccurrences} ({letterData.percentage}%)
              </p>
            </div>
          );
        })
      )}
      {lettersReport.length >= 6 && showMore === false ? (
        <button className="show-more-button" onClick={handleShowMore}>
          Show More <img src={chevronDown} />
        </button>
      ) : null}
      {showMore === true ? (
        <button className="show-less-button" onClick={handleShowLess}>
          Show Less <img src={chevronUp} />
        </button>
      ) : null}
    </div>
  );
};

export default LetterDensity;

const getLetterReport = (text) => {
  const formattedText = text.toLowerCase().replaceAll(" ", "");
  const uniqueLetters = [];
  const result = [];

  for (let i = 0; i < formattedText.length; i++) {
    if (!uniqueLetters.includes(formattedText[i])) {
      uniqueLetters.push(formattedText[i]);
    }
  }

  for (let i = 0; i < uniqueLetters.length; i++) {
    let counter = 0;
    for (let j = 0; j < formattedText.length; j++) {
      if (formattedText[j] === uniqueLetters[i]) {
        counter++;
      }
    }
    const percentage = (counter / formattedText.length) * 100;
    const roundedPercentage = percentage.toFixed(2);
    result.push({
      letter: uniqueLetters[i],
      numberOfOccurrences: counter,
      percentage: roundedPercentage,
    });
  }

  return result;
};
