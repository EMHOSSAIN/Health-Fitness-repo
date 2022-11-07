import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
  const {user,login}= useContext(AuthContext)

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
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

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
          required={true}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <p> Not registered? <NavLink className='text-blue-700 hover:underline dark:text-blue-500' to ='/signup'>Register</NavLink> </p>
      <Button type="submit">
        Submit
      </Button>
    </form>
    <Button> </Button>
  </Card>
</div>
    );
};

export default Login;