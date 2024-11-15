import { useEffect, useState } from "react";

const API_KEY = '9c5e7be87799c6fbbd634afc';

function useCurrencyinfo(amount, from, to) {
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    if (!amount || !from || !to) return;

    const fetchData = async () => {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
      );
      const data = await response.json();
      const rate = data.conversion_rates[to];
      setConvertedAmount((amount * rate).toFixed(2));
    };

    fetchData();
  }, [amount, from, to]);

  return  {convertedAmount} ;
}

export default useCurrencyinfo;