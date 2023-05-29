import React, { useMemo, useState } from 'react';
import './SimpleForm.scss';
import InputMask from 'react-input-mask';
import { IForm } from '../../interfaces/IForm';
import { IBasicValidator } from '../../interfaces/IBasicValidator';

export const SimpleForm: React.FC = () => {
  const [form, setForm] = useState<IForm>({
    fullName: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    cardNumber: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    expiryDate: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
    CVV: {
      value: '',
      isValid: false,
      errorMessage: '',
    },
  });

  const isFormValid = useMemo(
    () => Object.values(form).every(({ isValid }) => isValid),
    [form]
  );

  const basicValidator: IBasicValidator = {
    fullName: (value: string) =>
      /([A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,} )([A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,})/.test(
        String(value)
      ) || 'Full name is incorrect',
    cardNumber: (value: string) =>
      /\b\d{16}\b/.test(String(value.replaceAll(' - ', ''))) ||
      'Card number is incorrect',
    expiryDate: (value: string) =>
      /(0[1-9]|1[0-2])\/([0-9]{2})/.test(String(value)) ||
      'Expiry Date is incorrect',
    CVV: (value: string) =>
      /([0-9]{3})/.test(String(value)) || 'CVV is incorrect',
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid) {
      console.log(form);
    }
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target, value, name);

    const validator = basicValidator[name];
    console.log(validator, basicValidator);
    let isValid = true;
    let errorMessage = '';

    if (validator) {
      const validatorValue = validator(value);
      console.log(validatorValue);

      if (typeof validatorValue === 'string') {
        isValid = !validatorValue;
        errorMessage = validatorValue;
      }
    }

    setForm({
      ...form,
      [name]: { ...form[name], value, isValid, errorMessage },
    });
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
      {form['fullName'].errorMessage && (
        <p className='simple-form__error-message'>
          {form['fullName'].errorMessage}
        </p>
      )}
      <InputMask
        mask='9999 - 9999 - 9999 - 9999'
        // maskChar=''
        className='simple-form__input'
        type='text'
        name='cardNumber'
        placeholder='Card number'
        required
        onChange={handleFormChange}
      />
      {form['cardNumber'].errorMessage && (
        <p className='simple-form__error-message'>
          {form['cardNumber'].errorMessage}
        </p>
      )}
      <div className='simple-form__flex-container'>
        <div className='simple-form__flex-container simple-form__flex-container--column simple-form__flex-container--column-left'>
          <InputMask
            mask='99/99'
            // maskChar=''
            className='simple-form__input'
            type='text'
            name='expiryDate'
            placeholder='Expiry date (MM/YY)'
            required
            onChange={handleFormChange}
          />
          {form['expiryDate'].errorMessage && (
            <p className='simple-form__error-message'>
              {form['expiryDate'].errorMessage}
            </p>
          )}
        </div>
        <div className='simple-form__flex-container simple-form__flex-container--column'>
          <InputMask
            mask='999'
            // maskChar=''
            className='simple-form__input'
            type='text'
            name='CVV'
            placeholder='CVV'
            required
            onChange={handleFormChange}
          />
          {form['CVV'].errorMessage && (
            <p className='simple-form__error-message'>
              {form['CVV'].errorMessage}
            </p>
          )}
        </div>
      </div>
      <button
        className='simple-form__button'
        type='submit'
        disabled={!isFormValid}
      >
        Next step
      </button>
    </form>
  );
};
