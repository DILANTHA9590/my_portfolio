import React from "react";

export default function MainTitle({ title, text, sm }) {
  return (
    <>
      <h1
        className={`${`text-${sm}`} font-bold ${`sm:text-${text}`} text-accent py-2`}
      >
        {title}
      </h1>
    </>
  );
}
