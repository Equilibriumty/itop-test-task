import { useState } from 'react';
import { CurrencySelection } from './components/CurrencySelection/CurrencySelection';
import { Header } from './components/Header/Header';
import { useCurrencyRates } from './hooks/useCurrencyRates';
import { Currencies } from './types/responseType';
import { calculateRates, roundRate } from './utils/utils';
import './App.css';

function App() {
  const [amountFirst, setAmountFirst] = useState<number>(1);
  const [amountSecond, setAmountSecond] = useState<number>(1);

  const [selectedFirstCurrency, setSelectedFirstCurrency] =
    useState<keyof typeof Currencies>('UAH');

  const [selectedSecondCurrency, setSelectedSecondCurrency] =
    useState<keyof typeof Currencies>('EUR');

  const { data, error, loading } = useCurrencyRates();

  if (error) {
    return <div>Error</div>;
  }

  const currencies = Object.keys(data);

  const handleFirstCurrencySelect = (
    selectedFirstCurrency: keyof typeof Currencies
  ) => {
    setAmountSecond(
      roundRate(
        (amountFirst * data[selectedSecondCurrency]) /
          data[selectedFirstCurrency]
      )
    );
    setSelectedFirstCurrency(selectedFirstCurrency);
  };

  const handleSecondCurrencySelect = (
    selectedSecondCurrency: keyof typeof Currencies
  ) => {
    setAmountSecond(
      roundRate(
        (amountSecond * data[selectedFirstCurrency]) /
          data[selectedSecondCurrency]
      )
    );
    setSelectedSecondCurrency(selectedSecondCurrency);
  };

  const handleFirstAmountChange = (amountFirst: number) => {
    setAmountSecond(
      roundRate(
        (amountFirst * data[selectedSecondCurrency]) /
          data[selectedFirstCurrency]
      )
    );
    setAmountFirst(amountFirst);
  };

  const handleSecondAmountChange = (amountSecond: number) => {
    setAmountFirst(
      roundRate(
        (amountSecond * data[selectedFirstCurrency]) /
          data[selectedSecondCurrency]
      )
    );
    setAmountSecond(amountSecond);
  };
  return (
    <div className='App'>
      {loading ? (
        <h1>Loading data...</h1>
      ) : (
        <>
          <Header
            euroRate={calculateRates(data, Currencies.EUR)}
            dollarRate={calculateRates(data, Currencies.USD)}
          />
          <CurrencySelection
            onAmountChange={handleFirstAmountChange}
            onSelectChange={handleFirstCurrencySelect}
            amount={amountFirst}
            selectedCurrency={selectedFirstCurrency}
            currencies={currencies}
          />
          <CurrencySelection
            onAmountChange={handleSecondAmountChange}
            onSelectChange={handleSecondCurrencySelect}
            amount={amountSecond}
            selectedCurrency={selectedSecondCurrency}
            currencies={currencies}
          />
        </>
      )}
    </div>
  );
}

export default App;
