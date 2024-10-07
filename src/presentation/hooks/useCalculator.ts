import {useRef, useState} from 'react';

enum Operators {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (numberRecieved: string) => {
    if (number.includes('.') && numberRecieved === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      //Punto decimal
      if (numberRecieved === '.') {
        return setNumber(number + numberRecieved);
      }

      // otro cero y no hay numero
      if (numberRecieved === '0' && number.includes('.')) {
        return setNumber(number + numberRecieved);
      }
      // si es diferente a 0, no hay punto, es el primer numero
      if (numberRecieved !== '0' && !number.includes('.')) {
        return setNumber(numberRecieved);
      }
      //evitar multiples 0
      if (numberRecieved === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberRecieved);
    }
    setNumber(number + numberRecieved);
  };

  const deleteOperation = () => {
    if (number.length <= 1) {
      return setNumber('0');
    }
    if (number.length === 2 && number[0] === '-') {
      return setNumber('0');
    }
    const len = number.length;
    return setNumber(number.slice(0, len - 1));
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.multiply;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.add;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.subtract;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevNumber('0');
  };
  return {
    number,
    prevNumber,
    setNumber,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    setLastNumber,
    subtractOperation,
    addOperation,
    multiplyOperation,
    divideOperation,
    calculateResult,
  };
};
