
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
const {user, signInUsingGoogle } = useAuth();


    return (
        <div className="login-form
        ">
           <form  onSubmit={handleSubmit(onSubmit)}>
        
      <input defaultValue= { user.email } {...register("email")} />
      <br />
      <input defaultValue={ user.displayName } {...register("exampleRequired", { required: true })} />
      <br />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input  type="submit" />
    </form>
    <br />
    <button onClick={signInUsingGoogle} >Google Signin</button>
   
        </div>
    );
};

export default Login;