import React, { useContext } from "react";

export const AllowedContext = React.createContext({
  isAllowed: false,
  toggleIsAllowed: () => {},
});

export function useAllowedContext() {
  const isAllowed = useContext(AllowedContext);

  return isAllowed;
}
