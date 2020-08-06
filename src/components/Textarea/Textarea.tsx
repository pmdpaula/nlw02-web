// eslint-disable-next-line no-unused-vars
import React, { TextareaHTMLAttributes } from 'react';
import './Textarea.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => (
  <div className="textarea-block">
    <label htmlFor={name}>
      {label}
      <textarea id={name} {...rest} />
    </label>
  </div>
);

export default Textarea;
