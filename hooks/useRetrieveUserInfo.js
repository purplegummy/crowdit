import React, {useState} from 'react'
import { useFirebaseAuth } from '../services/contexts/AuthContext';
export const useRetrieveUserInfo = () => {
  const fbUser = useFirebaseAuth();
  const [user, setUser] = useState(null);
  
  const retrieveUserInfo = () => {
    

    return user;
  }
}
