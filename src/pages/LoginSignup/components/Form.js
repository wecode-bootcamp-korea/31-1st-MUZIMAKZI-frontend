import React from 'react';
import FormLayout from './FormLayout';
import Input from './Input';
import Button from './Button';
import './Form.scss';

const Form = ({
  type,
  title,
  inputData,
  handleInput,
  signInput,
  signCommunication,
}) => {
  // const [inputVal, setInputVal] = useState({
  //   signIn: {
  //     email: '',
  //     password: '',
  //   },
  //   signUp: {
  //     name: '',
  //     phone: '',
  //     email: '',
  //     password: '',
  //   },
  // });

  // const handleInput = e => {
  //   const { name, value } = e.target;
  //   console.log(inputVal);
  //   setInputVal(prevVal => ({ ...prevVal, ...prevVal[type], [name]: value }));
  // };
  console.log(signInput);
  return (
    <FormLayout>
      <div className="form">
        {inputData.map((input, idx) => (
          <Input
            name={type}
            key={idx}
            type={input.type}
            text={input.text}
            value={signInput[input.type]}
            signInput={signInput}
            handleInput={handleInput}
          />
        ))}
        <Button title={title} signCommunication={signCommunication} />
      </div>
    </FormLayout>
  );
};

export default Form;
