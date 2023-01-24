import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [amount, setAmount] = useState(0);
  const [invert, setInvert] = useState(false);
  const [search, setSearch] = useState(["???", 0]);
  const onSelect = (event) => {
    setSearch([...event.target.value.split(",")]);
    setAmount(0);
  };
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const onReset = () => {
    setAmount(0);
  };
  const onInvert = () => {
    setAmount(0);
    setInvert(!invert);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        //api를 불러오는 동안 Loading 메시지 출력
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>The Coins! ({coins.length})</h1>
        {loading ? <strong>Loading...</strong> : null}
        <h3>코인&달러 변환기</h3>
        <select value={search} onChange={onSelect}>
          <option value={search[0]}>select coins</option>
          {coins.map((coin) => (
            <option value={[coin.symbol, coin.quotes.USD.price]}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
        <hr />
      </div>
      <div>
        <label id="coin">{search[0]}</label>
        <input
          placeholder="코인을 입력해주세요"
          type="number"
          id="coin"
          value={!invert ? amount : amount <= 0 ? 0 : search[1] / amount}
          onChange={onChange}
          disabled={search[0] === "???" ? true : invert ? true : false}
        ></input>
      </div>
      <div>
        <label id="usd">USD</label>
        <input
          placeholder="달러를 입력해주세요"
          type="number"
          id="usd"
          value={invert ? amount : amount <= 0 ? 0 : search[1] * amount}
          onChange={onChange}
          disabled={search[0] === "???" ? true : invert ? false : true}
        ></input>
      </div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onInvert}>
        {invert ? "USD to Coin" : "Coin to USD"}
      </button>
    </div>
  );
}

export default Coin;
