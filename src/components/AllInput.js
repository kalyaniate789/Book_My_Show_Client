import React from "react";
import {useState, useEffect} from "react";

const InputField = ({selected, selectedCount}) => {
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    // here checking,if input is not selected then its value will be zero bydefault.
    if (!selected) {
      setInputValue(0);
    } else {
      selectedCount(inputValue);
    }
  }, [inputValue, selected]);

  useEffect(() => {
    const lsCount = localStorage.getItem("persistSeatCount");
    if (lsCount) {
      setInputValue(lsCount);
    }
  }, []);

  // this is onchange function to get value of input
  const onChangeHandler = (e) => {
    // here it is validating that value should not greater than twenty, should not less than zero, and length of input should not greater than two
    if (
      parseInt(e.target.value) <= 20 &&
      e.target.value.length <= 2 &&
      e.target.value >= 0
    ) {
      setInputValue(e.target.value);
      localStorage.setItem("persistSeatCount", e.target.value);
      // toast("Wow so easy!");
    } else {
      setInputValue("");
    }
  };

  return (
    <>
      <input
        type="number"
        value={inputValue}
        onChange={onChangeHandler}
        placeholder="0"
      />

      {/* <div>
        <ToastContainer />
      </div> */}
    </>
  );
};

export default InputField;
