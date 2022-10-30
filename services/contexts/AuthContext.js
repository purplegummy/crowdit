// FirebaseAuthContext.tsx
import * as React from "react";
import {auth} from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

const FirebaseAuthContext = React.createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = React.useState({
  });
 
  const retrieveUserInfo = async (user) => {
    console.log(user);
  
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      
        setUser(docSnap.data());
    }

    else {
      setUser(null);
    }
   
  }

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

        retrieveUserInfo(currentUser);
     
        
      
    });
    
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
    return context;
  }

export { AuthProvider, useFirebaseAuth };