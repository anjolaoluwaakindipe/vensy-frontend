import Link from 'next/link';
import { InputField } from '../../../../libs/ui/src/lib/shared/InputField';
function LoginPage() {
  return (
    <div className="gen-p pg-cont bg-blue-100 flex flex-col justify-center">
      <div className="bg-white max-w-xl p-8 mx-auto w-full rounded-lg shadow-md shadow-blue-500 space-y-8">
        {/* Info */}
        <div className="space-y-2">
          <h1 className="font-bold text-4xl">Welcome Back</h1>
          <h2 className="text-sm">Please input your details to login!</h2>
        </div>

        {/* Form */}
        <div className="space-y-10">
          {/* fields */}
          <div className="space-y-8">
            <InputField placeholder="example@gmail.com" label="Email" />
            <InputField placeholder="******" label="Password" isPassword />
          </div>
          {/* button */}
          <button className="btn-main">Sign in</button>
        </div>
        <h1 className='w-full text-center'>Don't have an account? Click <Link className='text-pink-500' href={"/signup"}> here</Link></h1>
      </div>
    </div>
  );
}

export default LoginPage;
