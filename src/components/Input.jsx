import React, { useId } from 'react';

function Input({
  label,
  className = "",
  amount,
  onAmountChange,
  oncurrencychange,
  currencyoptions = [],
  selectcurrency = "USD",
  amountdisable = false,
  currencydisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-slate-100 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount || 0}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 cursor-pointer bg-gray-100 outline-none"
          value={selectcurrency}
          onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
          disabled={currencydisable}
        >
          {currencyoptions.length > 0 ? (
            currencyoptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          ) : (
            <option value={selectcurrency}>{selectcurrency.toUpperCase()}</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default Input;