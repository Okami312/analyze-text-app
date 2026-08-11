import { useState } from "react";

const LetterDensity = ({ text }) => {
  let [showMore, setShowMore] = useState(false);
  const lettersReport = getLetterReport(text);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <div>
      <h2 className="title-letter-density">Letter Density</h2>
      {text.length === 0 ? (
        <p>No text found, start typing to see letter density</p>
      ) : (
        lettersReport.map((letterData, index) => {
          if (showMore === false && index >= 5) return null;

          return (
            <div key={letterData.letter} className="letter-data-card">
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
          Show More
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path
              d="M5.71875 6.375L1.09375 1.78125C0.9375 1.65625 0.9375 1.40625 1.09375 1.25L1.71875 0.65625C1.875 0.5 2.09375 0.5 2.25 0.65625L6 4.34375L9.71875 0.65625C9.875 0.5 10.125 0.5 10.25 0.65625L10.875 1.25C11.0312 1.40625 11.0312 1.65625 10.875 1.78125L6.25 6.375C6.09375 6.53125 5.875 6.53125 5.71875 6.375Z"
              fill="currentColor"
            />
          </svg>
        </button>
      ) : null}
      {showMore === true ? (
        <button className="show-less-button" onClick={handleShowLess}>
          Show Less
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path
              d="M6.25 0.65625L10.875 5.21875C11.0312 5.375 11.0312 5.625 10.875 5.75L10.25 6.375C10.125 6.53125 9.875 6.53125 9.71875 6.375L6 2.6875L2.25 6.375C2.09375 6.53125 1.875 6.53125 1.71875 6.375L1.09375 5.75C0.9375 5.625 0.9375 5.375 1.09375 5.21875L5.71875 0.65625C5.875 0.5 6.09375 0.5 6.25 0.65625Z"
              fill="currentColor"
            />
          </svg>
        </button>
      ) : null}
    </div>
  );
};

export default LetterDensity;

const getLetterReport = (text) => {
  const formattedText = text.toLowerCase().replace(/[^a-z]/g, "");
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
