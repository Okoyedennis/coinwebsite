import React from "react";
import { Select } from "@chakra-ui/react";

function CurrencyOptions({
  prop,
  fromCurrency,
  toCurrency,
  currencyOptions,
  updateCurrency,
}) {
  const options = currencyOptions.map((data, index) => {
    return (
      <option key={index} value={data}>
        {data}
      </option>
    );
  });
  return (
    <>
      {prop === "From currency" ? (
        <Select
          name="currency"
          className="select"
          value={fromCurrency}
          onChange={updateCurrency}
        >
          {options}
        </Select>
      ) : prop === "To currency" ? (
        <Select
          name="currency"
          className="select"
          value={toCurrency}
          onChange={updateCurrency}
        >
          {options}
        </Select>
      ) : null}
    </>
  );
}

export default CurrencyOptions;
