'use client';

type InputFieldProps = {
  label?: string;
  placeholder: string;
  isPassword?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error?:string
};
export function InputField(props: InputFieldProps) {
  return (
    <div className="space-y-2">
      <h1 className="font-semibold text-sm">{props.label}:</h1>
      <input
        type={props.isPassword ? 'password' : 'text'}
        className="border-[1px] border-gray-400 w-full h-10 p-4 rounded-md focus:outline-pink-300"
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      <h1 className="text-sm font-thin text-pink-800">{props.error}</h1>
    </div>
  );
}
