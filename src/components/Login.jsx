import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { Redirect, useHistory } from 'react-router-dom';
import lemmy from '../statics/lemmy.jpeg';
import { loginUser } from '../helpers/apiCalls';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const { setUser, setUserStatus, userStatus } = useContext(UserContext);

  const history = useHistory();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await loginUser(data);
    if (!res.error) {
      setUser(res.data);
      setUserStatus(true);
      history.push('/dashboard');
    }
  };

  if (userStatus) return <Redirect to='/dashboard' />;

  return (
    <div className='login'>
      <section>
        <div className='left'>
          <h1>Welcome back!</h1>
          <p>Please fill in your credentials</p>
          <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='info'>
                <input
                  name='email'
                  placeholder='Email'
                  defaultValue='Judd_Ryan@hotmail.com'
                  ref={register({
                    required: 'Please put your email sir.',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email is invalid. Please fix',
                    },
                  })}
                />
                <div className='error-message'>
                  {errors.email && <span>{errors.email.message}</span>}
                </div>
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  defaultValue='0123456789'
                  ref={register({
                    required: 'Required',
                    minLength: {
                      value: 5,
                      message: 'Password must be at least 5 characters',
                    },
                  })}
                />
                <div className='error-message'>
                  {errors.password && <span>{errors.password.message}</span>}
                </div>
              </div>

              <div className='submit'>
                <input className='button-bg' type='submit' value='Log in' />
              </div>
            </form>
          </div>
        </div>
        <div className='right'>
          <img src={lemmy} alt='uncle-lemmy'></img>
        </div>
      </section>
    </div>
  );
};

export default Login;
