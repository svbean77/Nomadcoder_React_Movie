import { useState, useEffect } from "react";

function Hello() {
  /* 
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");

    //useEffect의 return은 destroy일 때 실행
    return byFn;
  }

  useEffect(hiFn, []);
  */
  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  });
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyward] = useState("");
  const [showing, setShowing] = useState(false);

  const onCounterClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyward(event.target.value);
  const onBtnClick = () => setShowing((prev) => !prev);

  //처음에만 랜더링 될 함수를 첫 번째 인자에 넣어줌
  useEffect(() => {
    console.log("i run only once");
  }, []);
  //각각 keyward, counter가 변경될 때 re-render
  useEffect(() => {
    console.log(`i run when 'keyword' changes`);
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword or counter change");
  }, [keyword, counter]);

  return (
    <div>
      <div>
        <input
          value={keyword}
          type="text"
          placeholder="Search hear..."
          onChange={onChange}
        />
        <h1>{counter}</h1>
        <button onClick={onCounterClick}>Click me</button>
      </div>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onBtnClick}>{showing ? "Hide" : "Show"}</button>
      </div>
    </div>
  );
}

export default App;
