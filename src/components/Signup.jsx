import React from 'react'
import {useForm} from "react-hook-form"
import logIn from '../images/signUP.png'
import {useHistory} from "react-router-dom"
import {addSignupData} from "../helpers/apiCall"

const Signup = () => {
    const history = useHistory()
  
    const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
       await addSignupData(data)
       
      history.push("/store")

     console.log("Data=", data);
  }

    return (
        <>
        <div className="signup-wrapper">

            <div> 
                <h2>Hurrraaaaay! Let us know who you are!</h2>
                <h3>We won’t share you info with anybody. I promise.</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="firstName" ref={register({required: true})} placeholder="First name" />
                <input type="text" name="lastName" ref={register({required: true})} placeholder="Last name" />
                <input type="text" name="email" ref={register({required: true})} placeholder="Email" />
                {errors.email && <p>please provide your valid email!</p>}
                <input type="text" name="nickName" ref={register({required: true})} placeholder="Nickname" />
                <input type="password" name="password" ref={register({required:true})} placeholder="Password" />

                
                <input type="password" name="password" ref={register({required:true})} placeholder="Repeat password" />
                <button>Create account</button>
                </form>
            </div>
            
            <div className="logo-img">
            <img src={logIn} alt={logIn} />
            </div>
            </div>
        </>
    )
}

export default Signup
