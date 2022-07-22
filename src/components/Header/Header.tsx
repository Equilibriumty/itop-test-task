import styles from './Header.module.css';

interface HeaderProps {
  dollarRate: number;
  euroRate: number;
  date: number;
}

export const Header: React.FC<HeaderProps> = ({
  dollarRate,
  euroRate,
  date,
}) => {
  const rateDate = new Date(date * 1000).toLocaleTimeString();
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <h1>Currency Converter</h1>
        <h3>1 USD - {dollarRate} UAH</h3>
        <h3>1 EUR - {euroRate} UAH</h3>
        <h2>{rateDate}</h2>
      </div>
    </div>
  );
};
