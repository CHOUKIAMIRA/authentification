import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginuser } from '../../redux/action/action'

function Login() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
const handlelogin=(e)=>{
    e.preventDefault()//eviter le refraiche de la page
    dispatch(loginuser({email,password},navigate))
}
  return (
    <div>
        <section className="py-12 py-lg-24 bg-light">
  <div className="container">
    <div className="mw-lg mx-auto">
      <div className="mw-lg mx-auto text-center mb-14">
        <h2 className="mb-4">Welcome back</h2>
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center">
          <span className="text-dark">Free 1 month trial</span>
          <span className="mx-4">
            <svg
              width={5}
              height={6}
              viewBox="0 0 5 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy={3} r="2.5" fill="#B8C1CC" />
            </svg>
          </span>
          <span className="text-dark">No credit card required</span>
        </div>
      </div>
      <div className="p-8 mb-8 bg-white rounded-3">
        <form action="">
          <div className="mb-4">
            <input
              className="form-control"
              type="email"
              placeholder="Email Address"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button className="btn btn-primary w-100" onClick={handlelogin}>Sign In</button>
          </div>
          <div className="d-flex mb-4 align-items-center">
            <div className="bg-secondary w-100" style={{ height: 1 }} />
            <span className="d-inline-block mx-5 text-secondary-dark">or</span>
            <div className="bg-secondary w-100" style={{ height: 1 }} />
          </div>
          <div>
            <button className="btn w-100 btn-light">
              <div className="d-flex flex-wrap mb-n2 align-items-center justify-content-center">
                <svg
                  className="me-2 mb-2"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4343_1228)">
                    <path
                      d="M23.4375 12.2247C23.4375 11.2414 23.3577 10.5239 23.185 9.77979H11.957V14.2178H18.5476C18.4148 15.3207 17.6973 16.9816 16.1027 18.0977L16.0804 18.2463L19.6305 20.9965L19.8764 21.0211C22.1353 18.9349 23.4375 15.8654 23.4375 12.2247Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M11.9606 23.9173C15.1894 23.9173 17.9001 22.8543 19.88 21.0206L16.1063 18.0973C15.0964 18.8016 13.7411 19.2932 11.9606 19.2932C8.79816 19.2932 6.11409 17.2071 5.1573 14.3237L5.01705 14.3356L1.32562 17.1925L1.27734 17.3267C3.24389 21.2332 7.28332 23.9173 11.9606 23.9173Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.15551 14.3238C4.90305 13.5797 4.75694 12.7824 4.75694 11.9586C4.75694 11.1347 4.90305 10.3375 5.14222 9.59343L5.13554 9.43495L1.39786 6.53223L1.27557 6.59039C0.465068 8.2115 0 10.0319 0 11.9586C0 13.8853 0.465068 15.7057 1.27557 17.3268L5.15551 14.3238Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M11.9606 4.62403C14.2061 4.62403 15.7209 5.59401 16.5846 6.40461L19.9596 3.10928C17.8868 1.18259 15.1894 0 11.9606 0C7.2833 0 3.24388 2.68406 1.27734 6.59056L5.144 9.59358C6.11408 6.7102 8.79814 4.62403 11.9606 4.62403Z"
                      fill="#EB4335"
                    />
                  </g>
                </svg>
                <span className="mb-2">Sign in with Google</span>
              </div>
            </button>
          </div>
        </form>
      </div>
      <div className="text-center">
        <p className="fw-medium">
          <span className="text-secondary-dark">Don’t have an account?</span>
          <span />
          <a className="d-inline-block text-primary" href="#">
            Create Free Account
          </a>
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Login