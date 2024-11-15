import { useState } from "react";
import bgimage from './assets/pexels-matreding-12008048.jpg';
import { Input } from './components/ind';
import useCurrencyinfo from './Hooks/useCurrencyinfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const  {convertedAmount}  = useCurrencyinfo(amount, from, to);

  const options = ["USD", "INR", "EUR", "GBP", "CAD", "JPY", "AUD"];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
  };

  const backgroundimage = bgimage;

  return (
    <div
      className="w-full h-screen justify-center items-center flex flex-wrap"
      style={{
        backgroundImage: backgroundimage ? `url(${backgroundimage})` : `none`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `none`,
      }}
    >
      <div className="w-full max-w-md mx-auto bg-white/20 rounded-lg backdrop-blur-sm border p-5 border-gray-60">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-full mb-1">
            <Input
              label="From"
              amount={amount}
              currencyoptions={options}
              oncurrencychange={(currency) => setFrom(currency)}
              selectcurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative h-0.5 w-full">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-1 border-white rounded-md active:bg-blue-800 bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <Input
              label="To"
              amount={convertedAmount}
              currencyoptions={options}
              oncurrencychange={(currency) => setTo(currency)}
              selectcurrency={to}
              amountdisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg active:bg-blue-800 px-4 py-3"
            
          >
            Converted {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;