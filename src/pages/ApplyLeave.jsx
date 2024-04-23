import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
export default function ApplyLeave() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [reason, setReason] = useState("");

  const handleSelect = (ranges) => {
    console.log(ranges?.selection);
    setSelectionRange(ranges?.selection);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  const handleSubmit = () => {
    // write api call
  };
  return (
    <div className="ml-24 p-5">
      <div className="mb-5">
        <DateRangePicker
          className="w-[1000px]"
          ranges={[selectionRange]}
          onChange={handleSelect}
          minDate={new Date()}
        />
      </div>
      <textarea
        className="w-full p-2 border rounded"
        name="reason"
        id="reason"
        cols="30"
        rows="5"
        placeholder="Write reason here"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      ></textarea>
      <button
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}
