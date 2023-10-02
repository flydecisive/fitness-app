import React, { useContext } from "react";

export const UidContext = React.createContext({
  uid: undefined,
  toggleUid: () => {},
});

export function useUidContext() {
  const uid = useContext(UidContext);

  return uid;
}
