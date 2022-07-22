import { useState } from 'react';
import { CurrencySelection } from './components/CurrencySelection/CurrencySelection';
import { Header } from './components/Header/Header';
import { useCurrencyRates } from './hooks/useCurrencyRates';
import { Currencies, CurrencySigns } from './types/responseType';
import { calculateRates, roundRate } from './utils/utils';
import './App.css';

function App() {
  const [amountFirst, setAmountFirst] = useState<number>(1);
  const [amountSecond, setAmountSecond] = useState<number>(1);

  const [selectedFirstCurrency, setSelectedFirstCurrency] =
    useState<CurrencySigns>('UAH');

  const [selectedSecondCurrency, setSelectedSecondCurrency] =
    useState<CurrencySigns>('EUR');

  const { data, error, loading } = useCurrencyRates();

  if (error) {
    return <div>Error</div>;
  }
  const rates = data.rates;
  const currencySignatures = Object.keys(rates);

  const handleFirstCurrencySelect = (selectedFirstCurrency: CurrencySigns) => {
    setAmountSecond(
      roundRate(
        (amountFirst * rates[selectedSecondCurrency]) /
          rates[selectedFirstCurrency]
      )
    );
    setSelectedFirstCurrency(selectedFirstCurrency);
  };

  const handleSecondCurrencySelect = (
    selectedSecondCurrency: CurrencySigns
  ) => {
    setAmountSecond(
      roundRate(
        (amountSecond * rates[selectedFirstCurrency]) /
          rates[selectedSecondCurrency]
      )
    );
    setSelectedSecondCurrency(selectedSecondCurrency);
  };

  const handleFirstAmountChange = (amountFirst: number) => {
    setAmountSecond(
      roundRate(
        (amountFirst * rates[selectedSecondCurrency]) /
          rates[selectedFirstCurrency]
      )
    );
    setAmountFirst(amountFirst);
  };

  const handleSecondAmountChange = (amountSecond: number) => {
    setAmountFirst(
      roundRate(
        (amountSecond * rates[selectedFirstCurrency]) /
          rates[selectedSecondCurrency]
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
            euroRate={calculateRates(rates, Currencies.EUR)}
            dollarRate={calculateRates(rates, Currencies.USD)}
            date={data.timestamp}
          />
          <div className='mainContent'>
            <CurrencySelection
              onAmountChange={handleFirstAmountChange}
              onSelectChange={handleFirstCurrencySelect}
              amount={amountFirst}
              selectedCurrency={selectedFirstCurrency}
              currencies={currencySignatures}
            />
            <CurrencySelection
              onAmountChange={handleSecondAmountChange}
              onSelectChange={handleSecondCurrencySelect}
              amount={amountSecond}
              selectedCurrency={selectedSecondCurrency}
              currencies={currencySignatures}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
