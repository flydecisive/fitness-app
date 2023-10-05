import React, { useContext } from "react";

export const UserContext = React.createContext({
  uid: undefined,
  email: undefined,
  toggleUid: () => {},
  toggleEmail: () => {},
});

export function useUidContext() {
  const uid = useContext(UserContext);

  return uid;
}

export function useEmailContext() {
  const email = useContext(UserContext);

  return email;
}
