import { Fetcher, Route, Token, WETH } from "@uniswap/sdk";
import { usePoller } from "eth-hooks";
import { useState } from "react";

// MUMBAI price
export var mprice = fetch('https://api.binance.com/api/v3/ticker/price?symbol=MATICUSDT')
.then(response => response.json())
.then((jsonData) => {
  // jsonData is parsed json object received from url
  mprice = jsonData.price
  // console.log("OKKO"+mprice)
})
.catch((error) => {
  // handle your errors here
  console.error(error)
});


export default function useExchangePrice(targetNetwork, mainnetProvider, pollTime) {
  const [price, setPrice] = useState(0);

  const pollPrice = () => {
    async function getPrice() {
      setPrice(parseFloat(mprice));
    }
    getPrice();
  };
  usePoller(pollPrice, pollTime || 9777);

  return price;
}
