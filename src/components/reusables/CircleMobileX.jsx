/* eslint-disable react/prop-types */
export default function CircleMobileX({ number, bottom, left }) {
  return (
    <div
      className="circle-mobile-x flex justify-center items-center"
      style={{
        width: "30px",
        height: "30px",
        border: "transparent",
        borderRadius: "50%",
        position: "absolute",
        bottom: bottom,
        left: left,
      }}
    >
      <h1>{number}</h1>
    </div>
  );
}
