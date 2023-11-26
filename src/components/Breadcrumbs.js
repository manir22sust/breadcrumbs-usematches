import React from "react";
import { useMatches } from "react-router-dom";

export default function Breadcrumbs() {
  let matches = useMatches();
  let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data));

  const breadcrumbs = crumbs.map((crumb, ind) => {
    const isLast = ind === crumbs.length - 1;
    return (
      <>
        <span key={ind} className="name">
          {crumb}
        </span>
        {!isLast && <span className="arrow">&gt;</span>}
      </>
    );
  });

  return <div>{breadcrumbs}</div>;
}
