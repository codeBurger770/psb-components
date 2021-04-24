import { useState } from 'react';
import './App.css';
import { InputNumber } from './components';

export default function App() {
  const [value, setValue] = useState<number | undefined>();

  return (
    <>
      <InputNumber
        label="Сумма"
        value={value}
        priceStep={6}
        currency="₽"
        error="Введенное значение не должно быть равно 0"
        help="Значение суммы имеет информационный характер"
        onChange={setValue}
      />
      <InputNumber
        label="Сумма"
        value={value}
        priceStep={6}
        currency="₽"
        error="Введенное значение не должно быть равно 0"
        help="Значение суммы имеет информационный характер"
        disabled
        onChange={setValue}
      />
    </>
  );
}
