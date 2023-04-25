'use client';
import { InputField } from '@vensy-frontend/ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { SignUpVal } from '@vensy-frontend/utils/validation';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

function SignUpPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const { control, handleSubmit } = useForm<SignUpVal>({
    resolver: zodResolver(SignUpVal),
  });

  const onChange = (
    setter: Dispatch<SetStateAction<string>>,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value);
  };

  const submit = handleSubmit(async (data) => {
    const requestBody = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
      address: data.address,
      password: data.password,
    };
    try {
      const res = await fetch('/api/auth/company/register', {
        method: 'POST',
        body: JSON.stringify(requestBody),
      });
      if (res.ok || res.status === 201) {
        router.push('/login');
      } else if (res.status === 409) {
        toast.error('Account already exists!');
      } else {
        console.log(res.status);
        console.log(await res.json());
        toast.error('A validation error occured');
      }
    } catch (err) {
      toast.error('An error occured while making request');
    }
    setIsSubmitting(false);
  });

  return (
    <div className="gen-p pg-cont bg-blue-100 flex flex-col justify-center py-10">
      <div className="bg-white max-w-4xl p-8 mx-auto w-full rounded-lg shadow-md shadow-blue-500 space-y-8">
        {/* Info */}
        <div className="space-y-2">
          <h1 className="font-bold text-4xl">Sign Up</h1>
          <h2 className="text-sm">
            Please provide some information to start your journey!
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-10" onSubmit={submit}>
          {/* fields */}
          <div className="grid md:grid-cols-2 gap-x-7 gap-y-5">
            <Controller
              control={control}
              name="name"
              render={({ field, fieldState }) => (
                <InputField
                  placeholder="Company Limited"
                  label="Company Name"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="phoneNumber"
              render={({ field, fieldState }) => (
                <InputField
                  placeholder="+1 000 000 0000"
                  label="Phone Number"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="address"
              render={({ field, fieldState }) => (
                <InputField
                  placeholder="King St W, Waterloo, Ontario, Canada "
                  label="Address"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field, fieldState }) => (
                <InputField
                  placeholder="example@gmail.com"
                  label="Email"
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState }) => (
                <InputField
                  placeholder="******"
                  label="Password"
                  isPassword
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field, fieldState }) => (
                <InputField
                  placeholder="******"
                  label="Confirm Password"
                  isPassword
                  {...field}
                  error={fieldState.error?.message}
                />
              )}
            />
          </div>
          {/* button */}
          <button className="btn-main" type="submit">
            {isSubmitting ? 'Loading...' : 'Sign up'}
          </button>
        </form>
        <h1 className="w-full text-center">
          Already have an account? Login{' '}
          <Link className="text-pink-500" href="/login">
            {' '}
            here
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default SignUpPage;
