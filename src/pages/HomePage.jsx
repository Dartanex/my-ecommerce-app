import { Signin } from "../components/Signin"



export const HomePage = () => {
  

  return (
    <>
        <h1 className="text-center mt-2 text-white">Welcome, create new user!</h1>
        <section className="container mt-5 d-flex justify-content-center">
          <Signin />
        </section>
        
    </>
  )
}
