/* eslint-disable react/prop-types */
export default function Star({ color, top, left }) {
  return (
    <div style={{ position: "absolute", top: top, left: left }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="50"
        viewBox="0 0 100 100"
        fill={color}
        stroke="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M50 0 L57 40 L100 40 L58 51 L52 100 L45 51 L4 40 L44 39 Z"
          clipPath="polygon(50% 0, 57% 40%, 57% 40%, 100% 40%, 58% 51%, 52% 100%, 45% 51%, 4% 40%, 44% 39%);"
        ></path>
      </svg>
    </div>
  );
}
