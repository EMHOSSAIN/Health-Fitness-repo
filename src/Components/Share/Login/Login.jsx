import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
  const {user,login,googlesignup}= useContext(AuthContext)
  const navigate=useNavigate()

  const handlelogin = event=>{
    event.preventDefault()
    const form = event.target;
    const email= form.email.value;
    const password = form.password.value;
    console.log(email,password)

    login(email,password)
    .then(result=>{
      const user = result.user
      console.log(user)
      form.reset()
      navigate('/home')

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

  }

  const googleprovider =  new GoogleAuthProvider ();
  const hanheGoogleProvider=()=>{
    googlesignup(googleprovider)
    .then(result=>{
      const user = result.user
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    navigate('/home')

  }

    return (
        <div className="max-w-sm">
  <Card>
    <form onSubmit={handlelogin} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="email1"
            value="Your email"
          />
        </div>
        <TextInput
          name='email'
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          name='password'
          type="password"
          placeholder='Your password'
          required={true}
        />
      </div>
     
      <p> Not registered? <NavLink className='text-blue-700 hover:underline dark:text-blue-500' to ='/signup'>Register</NavLink> </p>
      <Button type="submit">
        Submit
      </Button>
    </form>
    <Button onClick={hanheGoogleProvider} > Sign with  <FaGoogle className='ml-4'/>  </Button>
  </Card>
</div>
    );
};

export default Login;