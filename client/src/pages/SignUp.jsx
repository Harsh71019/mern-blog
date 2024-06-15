import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          {/* Left */}
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>
              Harsh's
            </span>{' '}
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a demo project. You can sign in with email and password or
            with Google.
          </p>
        </div>
        <div className='flex-1'>
          {/* right */}
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label value='Your username'></Label>
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div className=''>
              <Label value='Your email'></Label>
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='username'
              />
            </div>{' '}
            <div className=''>
              <Label value='Your password'></Label>
              <TextInput type='password' placeholder='Password' id='username' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span> Have a account</span>
            <Link className='text-blue-500' to='/signin'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
