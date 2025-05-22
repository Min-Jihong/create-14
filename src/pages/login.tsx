import React from 'react';
import { useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // 로그인 처리 로직을 여기에 구현
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' {...register('username', { required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' {...register('password', { required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}