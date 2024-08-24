import React, { useState } from 'react';
import './ShiftCard.css'; // Optional: External CSS for better styling management
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsStack } from "react-icons/bs";

const ShiftCard = () => {
  const commonProperties = {
    location: "Remote East Coast",
    rate: "$24/hr",
    duration: "10hrs 30mins",
    MainTask: "Call Tutoring",
  };

  // Shifts array with unique properties
  const shifts = [
    { time: "12:00am - 10:30am EDT", SkillsPreferred: "LAMP Stack", status: "Late Night" },
//    { time: "1:00am - 11:30am EDT", SkillsPreferred: "LAMP Stack", status: "Late Night" },
    { time: "2:00am - 12:30pm EDT", SkillsPreferred: "LAMP Stack", status: "Late Night" },
 //   { time: "3:00am - 1:30pm EDT", SkillsPreferred: "LAMP Stack", status: "Late Night" },
 //   { time: "4:00am - 2:30pm EDT", SkillsPreferred: "LAMP Stack", status: "Late Night" },
//    { time: "5:00am - 3:30pm EDT", SkillsPreferred: "LAMP Stack", status: "Late Night" },
 //   { time: "6:00am - 4:30pm EDT", SkillsPreferred: "LAMP Stack" },
 //   { time: "7:00am - 5:30pm EDT", SkillsPreferred: "LAMP Stack" },
 //   { time: "8:00am - 6:30pm EDT", SkillsPreferred: "LAMP Stack" },
 //   { time: "9:00am - 7:30pm EDT", SkillsPreferred: "LAMP Stack" },
    { time: "10:00am - 8:30pm EDT", SkillsPreferred: "LAMP Stack" },
    { time: "11:00am - 9:30pm EDT", SkillsPreferred: "LAMP Stack" },
 //   { time: "12:00pm - 10:30pm EDT", SkillsPreferred: "LAMP Stack" },
 //   { time: "1:00pm - 11:30pm EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
  //  { time: "2:00pm - 12:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
 //   { time: "3:00pm - 1:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
    { time: "4:00pm - 2:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
    { time: "5:00pm - 3:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
 //   { time: "6:00pm - 4:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
 //   { time: "7:00pm - 5:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
 //   { time: "8:00pm - 6:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
 //   { time: "9:00pm - 7:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
  //  { time: "10:00pm - 8:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
  //  { time: "11:00pm - 9:30am EDT", SkillsPreferred: "LAMP Stack" , status: "Late Night"},
  //  { time: "12:00am - 10:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "1:00am - 11:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "2:00am - 12:30pm EDT", SkillsPreferred: "MERN Stack" },
    { time: "3:00am - 1:30pm EDT", SkillsPreferred: "MERN Stack" },
    { time: "4:00am - 2:30pm EDT", SkillsPreferred: "MERN Stack" },
//    { time: "5:00am - 3:30pm EDT", SkillsPreferred: "MERN Stack" },
//    { time: "6:00am - 4:30pm EDT", SkillsPreferred: "MERN Stack" },
//    { time: "7:00am - 5:30pm EDT", SkillsPreferred: "MERN Stack" },
//    { time: "8:00am - 6:30pm EDT", SkillsPreferred: "MERN Stack" },
//    { time: "9:00am - 7:30pm EDT", SkillsPreferred: "MERN Stack" },
//    { time: "10:00am - 8:30pm EDT", SkillsPreferred: "MERN Stack" },
//    { time: "11:00am - 9:30pm EDT", SkillsPreferred: "MERN Stack" },
    { time: "12:00pm - 10:30pm EDT", SkillsPreferred: "MERN Stack" },
    { time: "1:00pm - 11:30pm EDT", SkillsPreferred: "MERN Stack" },
 //   { time: "2:00pm - 12:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "3:00pm - 1:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "4:00pm - 2:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "5:00pm - 3:30am EDT", SkillsPreferred: "MERN Stack" },
    { time: "6:00pm - 4:30am EDT", SkillsPreferred: "MERN Stack" },
    { time: "7:00pm - 5:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "8:00pm - 6:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "9:00pm - 7:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "10:00pm - 8:30am EDT", SkillsPreferred: "MERN Stack" },
//    { time: "11:00pm - 9:30am EDT", SkillsPreferred: "MERN Stack" },
  //  { time: "12:00am - 10:30am EDT", SkillsPreferred: "MEAN Stack" },
  //  { time: "1:00am - 11:30am EDT", SkillsPreferred: "MEAN Stack" },
 //   { time: "2:00am - 12:30pm EDT", SkillsPreferred: "MEAN Stack" },
 //   { time: "3:00am - 1:30pm EDT", SkillsPreferred: "MEAN Stack" },
 //   { time: "4:00am - 2:30pm EDT", SkillsPreferred: "MEAN Stack" },
    { time: "5:00am - 3:30pm EDT", SkillsPreferred: "MEAN Stack" },
    { time: "6:00am - 4:30pm EDT", SkillsPreferred: "MEAN Stack" },
 //   { time: "7:00am - 5:30pm EDT", SkillsPreferred: "MEAN Stack" },
 //   { time: "8:00am - 6:30pm EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "9:00am - 7:30pm EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "10:00am - 8:30pm EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "11:00am - 9:30pm EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "12:00pm - 10:30pm EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "1:00pm - 11:30pm EDT", SkillsPreferred: "MEAN Stack" },
    { time: "2:00pm - 12:30am EDT", SkillsPreferred: "MEAN Stack" },
    { time: "3:00pm - 1:30am EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "4:00pm - 2:30am EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "5:00pm - 3:30am EDT", SkillsPreferred: "MEAN Stack" },
    { time: "6:00pm - 4:30am EDT", SkillsPreferred: "MEAN Stack" },
    { time: "7:00pm - 5:30am EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "8:00pm - 6:30am EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "9:00pm - 7:30am EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "10:00pm - 8:30am EDT", SkillsPreferred: "MEAN Stack" },
//    { time: "11:00pm - 9:30am EDT", SkillsPreferred: "MEAN Stack" },
    { time: "12:00am - 10:30am EDT", SkillsPreferred: "MEVN Stack" },
//    { time: "1:00am - 11:30am EDT", SkillsPreferred: "MEVN Stack" },
//    { time: "2:00am - 12:30pm EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "3:00am - 1:30pm EDT", SkillsPreferred: "MEVN Stack" },
    { time: "4:00am - 2:30pm EDT", SkillsPreferred: "MEVN Stack" },
 //   { time: "5:00am - 3:30pm EDT", SkillsPreferred: "MEVN Stack" },
 //   { time: "6:00am - 4:30pm EDT", SkillsPreferred: "MEVN Stack" },
 //   { time: "7:00am - 5:30pm EDT", SkillsPreferred: "MEVN Stack" },
    { time: "8:00am - 6:30pm EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "9:00am - 7:30pm EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "10:00am - 8:30pm EDT", SkillsPreferred: "MEVN Stack" },
    { time: "11:00am - 9:30pm EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "12:00pm - 10:30pm EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "1:00pm - 11:30pm EDT", SkillsPreferred: "MEVN Stack" },
    { time: "2:00pm - 12:30am EDT", SkillsPreferred: "MEVN Stack" },
    { time: "3:00pm - 1:30am EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "4:00pm - 2:30am EDT", SkillsPreferred: "MEVN Stack" },
   // { time: "5:00pm - 3:30am EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "6:00pm - 4:30am EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "7:00pm - 5:30am EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "8:00pm - 6:30am EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "9:00pm - 7:30am EDT", SkillsPreferred: "MEVN Stack" },
  //  { time: "10:00pm - 8:30am EDT", SkillsPreferred: "MEVN Stack" },
   // { time: "11:00pm - 9:30am EDT", SkillsPreferred: "MEVN Stack" },
    { time: "1:30am - 12:00pm EDT", SkillsPreferred: "Java" },
    { time: "11:30am - 10:00pm EDT", SkillsPreferred: "Java" },
    { time: "2:00am - 1:30pm EDT", SkillsPreferred: "Java" },
    { time: "12:30pm - 11:00pm EDT", SkillsPreferred: "Java" },
    { time: "7:00am - 5:30pm EDT", SkillsPreferred: "Java" },
    { time: "9:30am - 8:00pm EDT", SkillsPreferred: "Java" },
    { time: "1:30am - 12:00pm EDT", SkillsPreferred: "Python" },
    { time: "11:30am - 10:00pm EDT", SkillsPreferred: "Python" },
    { time: "2:00am - 1:30pm EDT", SkillsPreferred: "Python" },
    { time: "12:30pm - 11:00pm EDT", SkillsPreferred: "Python" },
    { time: "7:00am - 5:30pm EDT", SkillsPreferred: "Python" },
    { time: "9:30am - 8:00pm EDT", SkillsPreferred: "Python" },
].map(shift => ({ ...commonProperties, ...shift })); // Combine common properties with each shift's unique properties

  // State to manage shift acceptance
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptShift = () => {
    setIsAccepted(true);
  };

  return (
    <div className="shift-list">
      {shifts.map((shift, index) => (
        <div key={index} className="shift-card">
          <div className="shift-info">
            <h3>{shift.time} <span className="shift-duration">({shift.duration})</span></h3>
            <p>{shift.location}</p>
            <p className="status">{shift.status}</p>
            <div className="shift-warnings">
              <p className="warning">
                <span role="img" aria-label="warning"><TfiHeadphoneAlt/></span> {shift.MainTask}
              </p>
              <p className="ineligible">
                <span role="img" aria-label="not-allowed"><BsStack /></span> {shift.SkillsPreferred}
              </p>
            </div>
          </div>
          <div className="shift-actions">
            <div className="shift-rate">
              <span>{shift.rate}</span>
            </div>
            <button className="details-button" onClick={handleAcceptShift}>Add Shift</button>
            {isAccepted && <p>Shift Accepted</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShiftCard;
