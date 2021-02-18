export default function Button({ text, mathFunction, className = "" }) {
  return (
    <button className={className} onClick={mathFunction}>
      {text}
    </button>
  );
}
