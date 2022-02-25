import React from 'react';
type inputProps = {
  name: string;
  type: string;
  placeholder: string;
  onChange: (name: string, value: string) => void;
  value: string;
};

const Inputs: React.FC<inputProps> = (props) => {
  const { name, type, placeholder, value, onChange } = props;
  const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    onChange(name, value);
  };
  return (
    <input
      type={type}
      name={name}
      value={value}
      className=' border-1 border-gray-300 bg-transparent px-1 py-1 lg:px-3 '
      placeholder={placeholder}
      onChange={handelChange}
    ></input>
  );
};

export default Inputs;
