import React, { useState } from 'react';
import './SimpleForm.scss';
import InputMask from 'react-input-mask';
import { IForm } from '../../interfaces/IForm';
import { IBasicValidator } from '../../interfaces/IBasicValidator';

export const SimpleForm: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    fullName: {
      value: '',
      isValid: false,
    },
    cardNumber: {
      value: '',
      isValid: false,
    },
    expiryDate: {
      value: '',
      isValid: false,
    },
    CVV: {
      value: '',
      isValid: false,
    },
  });

  const basicValidator: IBasicValidator = {
    fullName: (value: string) =>
      /([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,} )([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,})/.test(
        String(value)
      ),
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target, value, name);

    const validator = basicValidator[name];
    console.log(validator, basicValidator);
    let isValid = true;

    if (validator) {
      isValid = validator(value);
    }

    setForm({ ...form, [name]: { ...form[name], value, isValid } });
  };

  return (
    <form className='simple-form' onSubmit={handleSubmit}>
      <h1 className='simple-form__title'>Add your informations</h1>
      <input
        className='simple-form__input'
        type='text'
        name='fullName'
        placeholder='Name on card'
        required
        onChange={handleFormChange}
      />
      <InputMask
        mask='9999 - 9999 - 9999 - 9999'
        maskChar=''
        className='simple-form__input'
        type='text'
        name='cardNumber'
        placeholder='Card number'
        required
        onChange={handleFormChange}
      />
      <div className='simple-form__flex-container'>
        <InputMask
          mask='99/99'
          maskChar=''
          className='simple-form__input'
          type='text'
          name='expiryDate'
          placeholder='Expiry date (MM/YY)'
          required
          onChange={handleFormChange}
        />
        <InputMask
          mask='999'
          maskChar=''
          className='simple-form__input'
          type='text'
          name='CVV'
          placeholder='CVV'
          required
          onChange={handleFormChange}
        />
      </div>
      <button className='simple-form__button' type='submit'>
        Next step
      </button>
    </form>
  );
};
