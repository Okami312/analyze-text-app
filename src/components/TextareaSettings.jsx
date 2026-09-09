const TextareaSettings = ({
  text,
  excludeSpaces,
  setExcludeSpaces,
  hasCharacterLimit,
  setHasCharacterLimit,
  characterLimit,
  setCharacterLimit,
}) => {
  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces);
  };

  const handleHasCharacterLimit = () => {
    setHasCharacterLimit(!hasCharacterLimit);
  };

  const handleCharacterLimitChange = (e) => {
    const newCharacterLimit =
      e.target.value === "" ? undefined : Number(e.target.value);
    setCharacterLimit(newCharacterLimit);
  };

  const getReadingTime = () => {
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount === 0) return "0 minutes";
    const minutes = wordCount / 200;
    if (minutes < 1) return "<1 minute";
    const roundedMinutes = Math.ceil(minutes);
    return `${roundedMinutes} minute${roundedMinutes === 1 ? "" : "s"}`;
  };

  return (
    <>
      <div className="settings-textarea-container">
        <div className="textarea-settings">
          <div>
            <input
              type="checkbox"
              id="exclude-spaces"
              onChange={handleExcludeSpaces}
              checked={excludeSpaces}
            />
            <label htmlFor="exclude-spaces">Exclude Spaces</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="character-limit"
              onChange={handleHasCharacterLimit}
              checked={hasCharacterLimit}
            />
            <label htmlFor="character-limit">Set character limits.</label>
            {hasCharacterLimit === true ? (
              <input
                type="number"
                className="input-character-limit"
                onChange={handleCharacterLimitChange}
                value={characterLimit}
              />
            ) : null}
          </div>
        </div>
        <p>Approx. reading time: {getReadingTime()}</p>
      </div>
    </>
  );
};

export default TextareaSettings;
