import { Text, Input, Container, Select, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CurrencyOptions from "./CurrencyOptions";

const Converter = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [currencyNames, setCurrencyNames] = useState({});
  useEffect(() => {
    fetch(`https://api.frankfurter.app/currencies`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions(Object.keys(data));
        setFromCurrency(Object.keys(data)[0]);
        setToCurrency(Object.keys(data)[0]);
        setCurrencyNames(data);
      });
  }, []);
  useEffect(() => {
    if (parseInt(fromAmount) === 0) {
      setToAmount(0);
    } else if (fromAmount === "") {
      setToAmount("");
    } else if (fromCurrency === toCurrency) {
      setToAmount(fromAmount);
    } else {
      fetch(
        `https://api.frankfurter.app/latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setToAmount(Object.values(data.rates)[0]));
    }
  }, [fromCurrency, toCurrency, fromAmount, toAmount]);
  return (
    <Container maxW="container.lg">
      <form>
        <h1>Currency Converter</h1>
        <div className="converter">
          <div className="selectContry1">
            <Text style={{ fontSize: "20px", fontWeight: "500" }} mb="8px">
              Amount:
            </Text>
            <Input
              type="number"
              autoComplete="off"
              value={fromAmount}
              placeholder="Amount"
              onChange={(e) => setFromAmount(e.target.value)}
              size="md"
            />
          </div>
          <div className="space" />
          <div className="selectContry1">
            <Text style={{ fontSize: "20px", fontWeight: "500" }} mb="8px">
              From:
            </Text>
            <CurrencyOptions
              prop="From currency"
              fromCurrency={fromCurrency}
              currencyOptions={currencyOptions}
              updateCurrency={(e) => setFromCurrency(e.target.value)}
            />
          </div>
          <div className="space" />
          <div className="selectContry2">
            <Text style={{ fontSize: "20px", fontWeight: "500" }} mb="8px">
              To:
            </Text>
            <CurrencyOptions
              prop="To currency"
              toCurrency={toCurrency}
              currencyOptions={currencyOptions}
              updateCurrency={(e) => setToCurrency(e.target.value)}
            />
          </div>
        </div>
        <div className="result">
          <h2>
            {fromAmount} {fromCurrency} = {toAmount} {toCurrency}
          </h2>
        </div>
      </form>
    </Container>
  );
};

export default Converter;
