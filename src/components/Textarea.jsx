const Textarea = ({ text, setText, characterLimit, hasCharacterLimit }) => {
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <textarea
        rows="6"
        cols="100"
        placeholder="Start type here ... (or paste your text)"
        onChange={handleTextChange}
        value={text}
        className="textarea-card"
      ></textarea>
      {hasCharacterLimit === true && text.length > characterLimit ? (
        <p className="character-limit-warning">Character limit exceeded!</p>
      ) : null}
    </>
  );
};

export default Textarea;
