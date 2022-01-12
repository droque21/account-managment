import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log({match})
  return (
      <Link
        className={match ? 'active' : ''}
        to={to}
        {...props}
      >
          {children}
      </Link>
  );
}