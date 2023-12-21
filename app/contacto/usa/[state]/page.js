import React from "react";

export default function State({ params }) {
  const { state } = params;

  return <div>{state}</div>;
}
