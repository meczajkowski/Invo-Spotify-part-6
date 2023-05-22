import React from 'react';
import './SimpleForm.scss';

export const SimpleForm: React.FC = () => {
  return (
    <form className='simple-form'>
      <input
        className='simple-form__input'
        type='text'
        name='fullName'
        placeholder='Name on card'
      />
      <input
        className='simple-form__input'
        type='text'
        name='cardNumber'
        placeholder='Card number'
      />
      <div className='simple-form__flex-container'>
        <input
          className='simple-form__input'
          type='text'
          name='expiryDate'
          placeholder='Expiry date (MM/YY)'
        />
        <input
          className='simple-form__input'
          type='text'
          name='CVV'
          placeholder='CVV'
        />
      </div>
      <button className='simple-form__button' type='submit'>
        Next step
      </button>
    </form>
  );
};
