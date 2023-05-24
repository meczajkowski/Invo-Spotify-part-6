import React, { useState } from 'react';
import './SimpleForm.scss';

export const SimpleForm: React.FC = () => {
  interface IForm {
    [key: string]: {
      value: string;
    };
  }

  const [form, setForm] = useState<IForm>({
    fullName: {
      value: '',
    },
    cardNumber: {
      value: '',
    },
    expiryDate: {
      value: '',
    },
    CVV: {
      value: '',
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setForm({ ...form, [name]: { ...form[name], value } });
  };

  return (
    <form className='simple-form' onSubmit={handleSubmit}>
      <h1 className='simple-form__title'>Add your informations</h1>
      <input
        className='simple-form__input'
        type='text'
        name='fullName'
        placeholder='Name on card'
        onChange={handleFormChange}
      />
      <input
        className='simple-form__input'
        type='text'
        name='cardNumber'
        placeholder='Card number'
        onChange={handleFormChange}
      />
      <div className='simple-form__flex-container'>
        <input
          className='simple-form__input'
          type='text'
          name='expiryDate'
          placeholder='Expiry date (MM/YY)'
          onChange={handleFormChange}
        />
        <input
          className='simple-form__input'
          type='text'
          name='CVV'
          placeholder='CVV'
          onChange={handleFormChange}
        />
      </div>
      <button className='simple-form__button' type='submit'>
        Next step
      </button>
    </form>
  );
};
