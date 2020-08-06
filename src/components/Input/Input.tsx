// eslint-disable-next-line no-unused-vars
import React, { InputHTMLAttributes } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => (
  <div className="input-block">
    <label htmlFor={name}>
      {label}
      <input type="text" id={name} {...rest} />
    </label>
  </div>
);

export default Input;
