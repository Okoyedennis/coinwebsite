import { Text, Input, Container, Select, Button } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Converter = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [rate, setRate] = useState([]);

  useEffect(() => {
    getRate();
  }, []);

  const getRate = (first, second) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=afcd6d2dd333f78493e9`,
    })
      .then((response) => {
        console.log(response.data);

        setRate(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const convert = (e) => {
    e.preventDefault();
    if (!first && !second) {
      alert("Please Enter Currency");
    } else {
      getRate(first, second);
    }
  };
  return (
    <Container maxW="container.lg">
      <form onSubmit={convert}>
        <div className="converter">
          <div className="selectContry1">
            <Text style={{ fontSize: "20px", fontWeight: "500" }} mb="8px">
              From:
            </Text>
            <Input
              type="text"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              placeholder="Enter Currency AUD, USD, EUR etc"
            />
          </div>
          <div className="space" />
          <div className="selectContry2">
            <Text style={{ fontSize: "20px", fontWeight: "500" }} mb="8px">
              To:
            </Text>
            <Input
              type="text"
              value={second}
              onChange={(e) => setSecond(e.target.value)}
              placeholder="Enter Currency AUD, USD, EUR etc"
            />
          </div>
        </div>
        <div className="buttomRow">
          <div className="result">
            <h1>
              1 {first} = {rate[`${first}_${second}`]} {second}
            </h1>
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
