import { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { Redirect, useHistory } from 'react-router-dom';
import basq from '../statics/basq.jpeg';
import { signUpUser } from '../helpers/apiCalls';

const Login = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const { user, setUser, setUserStatus, userStatus } = useContext(UserContext);

  const password = useRef({});
  password.current = watch('password', '');
  const history = useHistory();
  if (userStatus) return <Redirect to='/dashboard' />;

  const onSubmit = async (data) => {
    const res = await signUpUser(data);
    if (!res.error) {
      setUser(res.data);
      setUserStatus(true);
      history.push('/dashboard');
    }
  };

  return (
    <div className='login'>
      <section>
        <div class='left'>
          <h1>
            Hurrrraaaaay!
            <br />
            Let us know who you are!
          </h1>
          <p>
            We won't share your info with anybody! <br /> I promise.
          </p>
          <div class='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='info'>
                <div className='row'>
                  <div>
                    <input
                      name='firstName'
                      placeholder='First name'
                      ref={register({
                        required: 'Please put your first name.',
                      })}
                    />
                    <div className='error-message'>
                      {errors.firstName && <span>{errors.firstName.message}</span>}
                    </div>
                  </div>
                  <div>
                    <input
                      name='lastName'
                      placeholder='Last name'
                      ref={register({
                        required: 'Please put your last name.',
                      })}
                    />
                    <div className='error-message'>
                      {errors.lastName && <span>{errors.lastName.message}</span>}
                    </div>
                  </div>
                </div>

                <input
                  name='email'
                  placeholder='Email'
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
                  name='nickname'
                  placeholder='Nickname'
                  ref={register({
                    required: 'Nickname please...',
                  })}
                />
                <div className='error-message'>
                  {errors.nickname && <span>{errors.nickname.message}</span>}
                </div>
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
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
                <input
                  name='repeatPassword'
                  type='password'
                  placeholder='Repeat passworrd'
                  ref={register({
                    validate: (value) =>
                      value === password.current || 'The passwords do not match',
                  })}
                />
                <div className='error-message'>
                  {errors.repeatPassword && <span>{errors.repeatPassword.message}</span>}
                </div>
              </div>

              <div className='submit'>
                <input className='button-bg' type='submit' value='Log in' />
              </div>
            </form>
          </div>
        </div>
        <div class='right'>
          <img src={basq} alt='basq'></img>
        </div>
      </section>
    </div>
  );
};

export default Login;
