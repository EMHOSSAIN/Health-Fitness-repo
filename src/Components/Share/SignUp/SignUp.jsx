import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const SignUp = () => {
    const {user, userupdateprofile, createUser}=useContext(AuthContext)
    const handlesubmitted=event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user)
            form.reset()
            handleUpdateUserProfile()
        })
        .catch(error=>{
            console.error(error)
        })
      }


        //<-------------------- Profile Name and PhotoUrL--------------------->

        const handleUpdateUserProfile =(name,photoURL)=>{

          const profile={
    
            displayName : name,
            photoURL:photoURL
    
          }

          userupdateprofile(profile)
          .then(()=>{})
          .catch(error=>{
            console.error(error)
          })
  }

       
    return (
        <div className="max-w-sm">
        <Card>
          <form onSubmit={handlesubmitted} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="Name"
                  value="Your Name"
                />
              </div>
              <TextInput
              name='name'
                type="text"
                placeholder="Your name"
                required={true}
              />
            </div>
              <div className="mb-2 block">
                <Label
                  htmlFor="PhotoURL"
                  value="Your photoURL"
                />
              </div>
              <TextInput
              name='photoURL'
                type="text"
                placeholder="Your photoURL"
                // required={true}
              />
           
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
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            <Button type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    );
};

export default SignUp