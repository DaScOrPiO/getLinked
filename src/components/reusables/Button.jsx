/* eslint-disable react/prop-types */
export default function Button({ text, click }) {
  return (
    <button className="button" onClick={click}>
      {text}
    </button>
  );
}
