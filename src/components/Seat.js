import React, {useEffect} from "react";
import InputField from "./AllInput";

// this component rendering selected seat section
const SelectedSeat = ({
  seats,
  selectedSeats,
  setSelectedSeats,

  selectedCount,
  setSelectedCount,
}) => {
  useEffect(() => {
    const lsSeat = localStorage.getItem("persistSeat");
    if (lsSeat) {
      setSelectedSeats(lsSeat);
    }
  }, []);

  return (
    <div className="seat-row">
      <h3 className="Slots">Select the seats</h3>
      {seats.map((seat, i) => (
        <div
          key={i}
          className={`seat-column ${
            seat == selectedSeats ? "seat-column-selected" : ""
          }`}
          onClick={() => {
            setSelectedSeats(seat);
            localStorage.setItem("persistSeat", seat);
          }}
        >
          Type {seat} <br /> <br />
          {/* here we are calling input component and passing some props */}
          <InputField
            count={selectedCount}
            selectedCount={setSelectedCount}
            selected={seat == selectedSeats}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectedSeat;
