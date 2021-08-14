import { Text, Input, Container, Select, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Converter = () => {
  const [text1, setText1] = useState(1);
  const [text2, setText2] = useState();
  const [country1, setCountry1] = useState([]);
  const [country2, setCountry2] = useState([]);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const result = await axios.get(
      "http://data.fixer.io/api/symbols?access_key=4b6fdaa6b09b588b789709447d2370a7"
    );
    console.log(result.data.rates);
    setCountry1(result.data.rates);
    setCountry2(result.data.rates);
  };

  const convert = (e) => {
    e.preventDefault();
    let num = (value2 / value1) * text1;
    setText2(num.toFixed(2));
  };
  return (
    <Container maxW="container.lg">
      <form onSubmit={convert}>
        <div className="converter">
          <div className="input">
            <Text style={{ fontSize: "20px", fontWeight: "500" }} mb="8px">
              Amount:
            </Text>
            <Input
              placeholder="Enter Amount"
              className="input"
              value={text1 || " "}
              onChange={(e) => setText1(e.target.value)}
              type="text"
              size="md"
            />
          </div>
          <div className="space" />
          <div className="selectContry1">
            <Text style={{ fontSize: "20px", fontWeight: "500" }} mb="8px">
              From:
            </Text>
            <Select
              className="select"
              placeholder="Select option"
              onChange={(e) => setValue1(e.target.value)}
            >
              {Object.keys(country1).map((value, index) => (
                <option key={index} value={country1[value]}>
                  {value}
                </option>
              ))}
            </Select>
          </div>
          <div className="space" />
          <div className="selectContry2">
            <Text style={{ fontSize: "20px", fontWeight: "500" }} mb="8px">
              To:
            </Text>
            <Select
              className="select"
              placeholder="Select option"
              onChange={(e) => setValue2(e.target.value)}
            >
              {Object.keys(country2).map((value, index) => (
                <option key={index} value={country1[value]}>
                  {value}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className="buttomRow">
          <div className="result">
            <h1>{text2}</h1>
          </div>
          <Button
            type="submit"
            className="button"
            style={{ backgroundColor: "#406BC6", color: "#fff" }}
          >
            Convert
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Converter;
