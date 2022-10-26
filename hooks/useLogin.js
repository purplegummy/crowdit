import {useState} from 'react'

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/Firebase";
export const useLogin = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const login = async (email, password) => {
    setLoading(true);
    
    await signInWithEmailAndPassword(auth, email, password); 
    
    setLoading(false);
    
  }
  return { login, error, loading }
}
