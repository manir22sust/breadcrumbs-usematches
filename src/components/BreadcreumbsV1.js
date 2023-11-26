import React from "react";
import { useMatches } from "react-router-dom";

export default function Breadcrumbs() {
  let matches = useMatches();

  function processCrumbs(match) {
    let crumbElements = [];
    if (match.handle?.crumb) {
      crumbElements.push(match.handle.crumb(match.data));
    }
    if (match.children) {
      match.children.forEach((childMatch) => {
        crumbElements = crumbElements.concat(processCrumbs(childMatch));
      });
    }
    return crumbElements;
  }

  let crumbs = matches.flatMap((match) => processCrumbs(match));
  console.log(crumbs);
  return (
    <ol>
      <h1> I'm Breadcrumbs two </h1>
      {crumbs.map((crumb, index) => (
        <li key={index}>{crumb}</li>
      ))}
    </ol>
  );
}
