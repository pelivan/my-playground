type TextInputProps = {
  name: string;
  value?: string;
  setValue: (value: string) => void;
};

function TextInput({ name, value = "", setValue }: TextInputProps) {
  return (
    <input
      type="text"
      className="mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={name}
      value={value}
      required
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
}

export default TextInput;
