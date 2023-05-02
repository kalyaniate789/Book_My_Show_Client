import React, {useEffect} from "react";

const LastBooking = ({lastBooking}) => {
  return (
    <div className="last-order">
      <h3 className="Bookdetails">Last booking details:</h3>
      {lastBooking.message ? (
        <div>No Previous Bookings Found</div>
      ) : (
        <div>
          <p>
            <b>Seats:</b>
          </p>
          <p>
            <b>A1:</b> {lastBooking?.seats?.A1}
          </p>
          <p>
            <b>A2:</b> {lastBooking?.seats?.A2}
          </p>
          <p>
            <b>A3:</b> {lastBooking?.seats?.A3}
          </p>
          <p>
            <b>A4:</b> {lastBooking?.seats?.A4}
          </p>
          <p>
            <b>D1:</b> {lastBooking?.seats?.D1}
          </p>
          <p>
            <b>D2:</b> {lastBooking?.seats?.D2}
          </p>
          <p>
            <b>Slot:</b> {lastBooking?.slot}
          </p>
          <p>
            <b>Movie:</b> {lastBooking?.movie}
          </p>
        </div>
        // <div>No Booking Found</div>
      )}
    </div>
  );
};

export default LastBooking;
