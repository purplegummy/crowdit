// FirebaseAuthContext.tsx
import * as React from "react";
import {auth} from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

const FirebaseAuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = React.useState({
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
  });
  

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    console.log(user);
    return unsubscribe;
  }, []);

  return (
    <FirebaseAuthContext.Provider value={{user}}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};
function useFirebaseAuth() {
    const context = React.useContext(FirebaseAuthContext);
    if (context === undefined) {
      throw new Error(
        "useFirebaseAuth must be used within a FirebaseAuthProvider"
      );
    }
    return context.user;
  }

export { AuthProvider, useFirebaseAuth };