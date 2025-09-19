const StatisticsCard = ({ text, excludeSpaces }) => {
  const wordCount = text
    .replaceAll(".", " ")
    .replaceAll("!", " ")
    .replaceAll("?", " ")
    .split(" ")
    .filter((word) => word !== "").length;

  const sentenceCount = text
    .replaceAll("?", ".")
    .replaceAll("!", ".")
    .replaceAll("...", ".")
    .split(".")
    .filter((word) => word !== "").length;

  return (
    <>
      <div className="statistics-container">
        <div className="total-characters statistics-card">
          <p>
            {excludeSpaces === true
              ? text.replaceAll(" ", "").length
              : text.length}
          </p>
          <h3>Total Characters</h3>
        </div>
        <div className="word-count statistics-card">
          <p>{wordCount}</p>
          <h3>Word Count</h3>
        </div>
        <div className="sentence-count statistics-card">
          <p>{sentenceCount}</p>
          <h3>Sentence Count</h3>
        </div>
      </div>
    </>
  );
};

export default StatisticsCard;
