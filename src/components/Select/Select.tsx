// eslint-disable-next-line no-unused-vars
import React, { SelectHTMLAttributes } from 'react';
import './Select.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>
}

const Select: React.FC<SelectProps> = ({
  label, name, options, ...rest
}) => (
  <div className="select-block">
    <label htmlFor={name}>
      {label}
      <select id={name} defaultValue="" {...rest}>
        <option value="" disabled hidden>Selecione uma opção</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default Select;
