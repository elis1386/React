import { SignForm } from "./SignForm"
import { Link } from "react-router-dom"
import { signUp } from "../services/firebase"
import { useState } from "react"


export const SignUp = () => {
    const [errore, setErrore] = useState('')
    const [loading, setLoading] = useState(false)

  const handleSignUp = async(email, password) => {
      setLoading(true)
    try{
     await signUp(email,password)
    }catch(err){
        console.log(err)
        setErrore(err.message)
    }finally{
        setLoading(false)
    }
  }
  return (
    <div>
    <SignForm onSubmit={handleSignUp} errore={errore} loading={loading}/>
    <Link to='/'>Sign out</Link>
    </div>
)
}