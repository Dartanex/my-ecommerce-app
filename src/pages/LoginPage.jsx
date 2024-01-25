import { Login } from "../components/Login"


export const LoginPage = () => {
  return (
    <>
        <h1 className="text-center mt-2 text-white">Welcome, Login user!</h1>
        <section className="container mt-5 d-flex justify-content-center">  
        <Login />
        </section>
    </>
  )
}
