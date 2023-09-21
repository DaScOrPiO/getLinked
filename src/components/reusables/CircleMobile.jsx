/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

export default function CircleMobile({ number, bottom, left }) {
    return (
      <div
        className="circle-mobile flex justify-center items-center"
        style={{
          width: "40px",
          height: "40px",
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
  