import React from "react";
import "./DateAndTime.css";

// kasai ko time zone agadi ho lo uie lai kasai gaddu padalo api use

const DateAndTime = () => {
  const today = new Date();
  console.log(today);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);
  console.log(formattedDate);

  return (
    <div className="dates">
      <div className="dateTime">
        <p style={{ background: "none", fontWeight: "bold" }}>
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

  // const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  // const months = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'Nocvember',
  //   'December',
  // ]
  // const currentDate = new Date()
  // const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
  //   months[currentDate.getMonth()]
  // }`;

export default DateAndTime;
