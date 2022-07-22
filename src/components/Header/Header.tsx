import './Header.module.css';

interface HeaderProps {
  dollarRate: number;
  euroRate: number;
}

export const Header = ({ dollarRate, euroRate }: HeaderProps) => {
  return (
    <div className='header'>
      <div className='headerContent'>
        <h1>Currency Converter</h1>
        <h2>1 USD - {dollarRate} UAH</h2>
        <h2>1 EUR - {euroRate} UAH</h2>
      </div>
    </div>
  );
};
