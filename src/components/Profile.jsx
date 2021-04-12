import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/UserContext';
import { Redirect, useHistory } from 'react-router-dom';
import one from '../statics/01.gif';
import two from '../statics/02.gif';
import three from '../statics/03.gif';
import four from '../statics/04.gif';
import five from '../statics/05.gif';
import six from '../statics/06.gif';
import seven from '../statics/07.gif';
import eight from '../statics/08.gif';
import nine from '../statics/09.gif';
import { updateUser } from '../helpers/apiCalls';

const Profile = () => {
  const { register, handleSubmit, errors } = useForm();
  const { user, setUser, setUserStatus, userStatus } = useContext(UserContext);

  const history = useHistory();

  const onSubmit = async (data) => {
    const res = await updateUser(data, user._id);
    if (!res.error) {
      setUser(res.data);
    }
  };

  if (!userStatus) return <Redirect to='/' />;
  const avatarCode = user.avatar.slice(-6, -4);

  const updateAvatar = async (e) => {
    const code = e.target.dataset.name;
    const data = { avatar: `/statics/${code}.gif` };
    const res = await updateUser(data, user._id);
    if (!res.error) {
      setUser(res.data);
    }
    console.log(code);
  };

  return (
    <div className='profile'>
      <section>
        <div className='left'>
          <h1>Your profile, {user.nickname}.</h1>
          <p>Don't forget to click the save button before you are gone</p>
          <div className='form-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='info'>
                <div className='row'>
                  <div>
                    <input
                      name='firstName'
                      placeholder='First name'
                      defaultValue={user.firstName}
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
                      defaultValue={user.lastName}
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
                  defaultValue={user.email}
                  disabled={true}
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
                  defaultValue={user.nickname}
                  ref={register({
                    required: 'Nickname please...',
                  })}
                />
                <div className='error-message'>
                  {errors.nickname && <span>{errors.nickname.message}</span>}
                </div>
              </div>

              <div className='submit'>
                <input className='button-bg' type='submit' value='Save' />
              </div>
            </form>
          </div>
        </div>
        <div className='right'>
          <h1>You can also update your zupa kewl pic</h1>
          <p>omg. These are so cool. tenk u Gabriel hollington</p>
          <div className='avatar-panel'>
            <div className='main'>
              <img src={user.avatar}></img>
            </div>
            <div className='grid'>
              <img
                src={one}
                alt='01'
                data-name='01'
                className={avatarCode === '01' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
              <img
                src={two}
                alt='02'
                data-name='02'
                className={avatarCode === '02' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
              <img
                src={three}
                alt='03'
                data-name='03'
                className={avatarCode === '03' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
              <img
                src={four}
                alt='04'
                data-name='04'
                className={avatarCode === '04' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
              <img
                src={five}
                alt='05'
                data-name='05'
                className={avatarCode === '05' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
              <img
                src={six}
                alt='06'
                data-name='06'
                className={avatarCode === '06' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
              <img
                src={seven}
                alt='07'
                data-name='07'
                className={avatarCode === '07' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
              <img
                src={eight}
                alt='08'
                data-name='08'
                className={avatarCode === '08' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
              <img
                src={nine}
                alt='09'
                data-name='09'
                className={avatarCode === '09' ? 'selected' : 'option'}
                onClick={updateAvatar}
              ></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
