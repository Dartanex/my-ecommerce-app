import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { app } from "../firebase"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

export const ProductPage = () => {
  
  const auth = getAuth(app)
  const navigate = useNavigate()
  const [loading, setLoagind] = useState(true)

  useEffect(() => {
    const authentication = onAuthStateChanged(auth, (user) => {
        if(user) {
          console.log("succefully Logged")
        } else {
          navigate('/login')
        }
        setLoagind(false)
      })

      return () => {
        authentication() //al agregar el return se torna un cleanup o como un switch entre true y false para loggear y desloggear
      }

  }, [auth, navigate])

  const logout = async() => {
    const user = await signOut(auth)
    console.log(user)
  }
  
  if (loading) return <h1>Cargando...</h1>
  return (
    <>
        <h1>Página de productos (Ruta protegida)</h1>
        <button type="button" onClick={logout}>Cerrar Sesión</button>
    </>
  )
}
