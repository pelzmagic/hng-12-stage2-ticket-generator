// eslint-disable-next-line react/prop-types
export default function Button({ children, className = "", onClick }) {
  return (
    <button className={`px-6 py-3 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
