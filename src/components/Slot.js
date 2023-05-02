import React, {useEffect} from "react";

// this component rendering selected slot section
const SelectSlot = ({slots, selectedSlot, setSelectedSlot}) => {
  useEffect(() => {
    const lsSlot = localStorage.getItem("persistSlot");
    if (lsSlot) {
      setSelectedSlot(lsSlot);
    }
  }, []);

  return (
    <div className="slot-row">
      <h3 className="Slots">Select a Time Slot</h3>
      {slots.map((slot, i) => (
        <div
          key={i}
          className={`slot-column ${
            slot == selectedSlot ? "slot-column-selected" : ""
          }`}
          onClick={() => {
            setSelectedSlot(slot);
            localStorage.setItem("persistSlot", slot);
          }}
        >
          {slot}
        </div>
      ))}
    </div>
  );
};

export default SelectSlot;
