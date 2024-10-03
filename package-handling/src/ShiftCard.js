import React, { useState } from 'react';
import './ShiftCard.css';  
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsStack } from "react-icons/bs";
import { BsCashStack } from "react-icons/bs";

const ShiftCard = () => {

  const [filters, setFilters] = useState({
    "LAMP Stack": false,
    "MERN Stack": false,
    "MEAN Stack": false,
    "MEVN Stack": false,
    "Java": false,
    "Python": false,
    "Late Night": false,
    "JAMStack": false,
    "Ruby on Rails": false,
    "Serverless": false,
    "PERN Stack": false,
    "Academic Advising": false,
    "Technical Support": false,
    "FH": false,
    "SH": false,
  });

  const commonProperties = {
    location: "Remote East Coast",
    rate: "$32/hr",
    duration: "10hrs 30mins",
    MainTask: "WebChat Support",
  };

  const FH = "Sun, Mon, Tue, Wed";
  const SH = "Thu, Fri, Sat, Sun";
  const MT = "Mon, Tue";
  const WT = "Wed, Thu";
  const FS = "Fri, Sat";
  const LN = "Late Night";
  const LAMP = "LAMP Stack";
  const MERN = "MERN Stack";
  const MEAN = "MEAN Stack";
  const MEVN = "MEVN Stack";
  const J = "Java";
  const P = "Python";
  const JAM = "JAMStack";
  const ROR = "Ruby on Rails";
  const SL = "Serverless";
  const PERN = "PERN Stack";
  const AA = "Academic Advising";
  const IT = "Technical Support";
  const SH1 = "12:00am to 10:30am EDT";
  const SH2 = "1:00am to 11:30am EDT";
  const SH3 = "2:00am to 12:30pm EDT";
  const SH4 = "3:00am to 1:30pm EDT";
  const SH5 = "4:00am to 2:30pm EDT";
  const SH6 = "5:00am to 3:30pm EDT";
  const SH7 = "6:00am to 4:30pm EDT";
  const SH8 = "7:00am to 5:30pm EDT";
  const SH9 = "8:00am to 6:30pm EDT";
  const SH10 = "9:00am to 7:30pm EDT";
  const SH11 = "10:00am to 8:30pm EDT";
  const SH12 = "11:00am to 9:30pm EDT";
  const SH13 = "12:00pm to 10:30pm EDT";
  const SH14 = "1:00pm to 11:30pm EDT";
  const SH15 = "2:00pm to 12:30am EDT";
  const SH16 = "3:00pm to 1:30am EDT";
  const SH17 = "4:00pm to 2:30am EDT";
  const SH18 = "5:00pm to 3:30am EDT";
  const SH19 = "6:00pm to 4:30am EDT";
  const SH20 = "7:00pm to 5:30am EDT";
  const SH21 = "8:00pm to 6:30am EDT";
  const SH22 = "9:00pm to 7:30am EDT";
  const SH23 = "10:00pm to 8:30am EDT";
  const SH24 = "11:00pm to 9:30am EDT";
  const L12A = "8:00am to 10:00pm EDT";
  const L16A = "8:00am to 12:00am EDT";
  const L17A = "4:00pm to 8:00am EDT";

  const shifts = [
    // LAMP
      {indo:"1", time: SH1, SkillsPreferred:LAMP, status: LN, assignedTo:"", schedule:FH, location: "" },
      {indo:"2", time: SH1, SkillsPreferred:LAMP, status: LN, assignedTo:"", schedule:SH, location: "" },
      {indo:"3", time: SH9, SkillsPreferred:LAMP, status: "", assignedTo:"", schedule:FH, location: "" },
      {indo:"4", time: SH9, SkillsPreferred:LAMP, status: "", assignedTo:"", schedule:SH, location: "" },
      {indo:"5", time: SH17, SkillsPreferred:LAMP, status: LN, assignedTo:"", schedule:FH, location: "" },
      {indo:"6", time: SH17, SkillsPreferred:LAMP, status: LN, assignedTo:"", schedule:SH, location: "" },
      {indo:"7", time: SH2, SkillsPreferred:LAMP, status: LN, assignedTo:"", schedule:FH, location: "" },
      {indo:"8", time: SH2, SkillsPreferred:LAMP, status: LN, assignedTo:"", schedule:SH, location: "" },
      {indo:"9", time: SH10, SkillsPreferred:LAMP, status: "", assignedTo:"", schedule:FH, location: "" },
      {indo:"10", time: SH10, SkillsPreferred:LAMP, status: "", assignedTo:"", schedule:SH, location: "" },
      {indo:"11", time: SH15, SkillsPreferred:LAMP, status: LN, assignedTo:"", schedule:FH, location: "" },
      {indo:"12", time: SH15, SkillsPreferred:LAMP, status: LN, assignedTo:"", schedule:SH, location: "" },
    // MERN
      {indo:"25", time: SH7, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:FH, location: "" },
      {indo:"26", time: SH7, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:SH, location: "" },
      {indo:"27", time: SH17, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:FH, location: "" },
      {indo:"28", time: SH17, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:SH, location: "" },
      {indo:"29", time: SH21, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:FH, location: "" },
      {indo:"30", time: SH21, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:SH, location: "" },
      {indo:"31", time: SH7, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:FH, location: "" },
      {indo:"32", time: SH7, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:SH, location: "" },
      {indo:"33", time: SH18, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:FH, location: "" },
      {indo:"34", time: SH18, SkillsPreferred:MERN, status: "", assignedTo:"", schedule:SH, location: "" },
    // MEAN
    // MEVN
    // Java
    {indo:"13", time: SH3, SkillsPreferred:J, status: LN, assignedTo:"", schedule:FH, location: "" },
    {indo:"14", time: SH3,SkillsPreferred:J, status: LN, assignedTo:"", schedule:SH, location: "" },
    {indo:"15", time: SH13, SkillsPreferred:J, status: "", assignedTo:"", schedule:FH, location: "" },
    {indo:"16", time: SH13, SkillsPreferred:J, status: "", assignedTo:"", schedule:SH, location: "" },
    {indo:"17", time: SH19, SkillsPreferred:J, status: "", assignedTo:"", schedule:FH, location: "" },
    {indo:"18", time: SH19, SkillsPreferred:J, status: "", assignedTo:"", schedule:SH, location: "" },
    // Python
    {indo:"19", time: SH2, SkillsPreferred:P, status: LN, assignedTo:"Mitchell Martinez", schedule:FH, location: "USA" },
    {indo:"20", time: SH2, SkillsPreferred:P, status: LN, assignedTo:"", schedule:SH, location: "" },
    {indo:"21", time: SH16, SkillsPreferred:P, status: "", assignedTo:"", schedule:FH, location: "" },
    {indo:"22", time: SH16, SkillsPreferred:P, status: "", assignedTo:"", schedule:SH, location: "" },
    {indo:"23", time: SH8, SkillsPreferred:P, status: "", assignedTo:"", schedule:FH, location: "" },
    {indo:"24", time: SH8, SkillsPreferred:P, status: "", assignedTo:"", schedule:SH, location: "" },

    // JAMStack
    {indo:"25", time: L12A, SkillsPreferred:JAM, status: "", duration: "12 hours", assignedTo:"", schedule:MT, location: "" },
    {indo:"26", time: L16A, SkillsPreferred:JAM, status: "", duration: "16 hours", assignedTo:"", schedule:WT, location: "" },
    {indo:"27", time: L17A, SkillsPreferred:JAM, status: "", duration: "16 hours", assignedTo:"", schedule:MT, location: "" },
    {indo:"28", time: L12A, SkillsPreferred:JAM, status: "", duration: "12 hours", assignedTo:"", schedule:WT, location: "" },
    // Ruby on Rails
    // Serverless
    // PERN Stack
    // Academic Advising
    {indo:"29", time: L12A, SkillsPreferred:AA, status: LN, duration: "12 hours", assignedTo:"", schedule:MT, location: "" },
    {indo:"30", time: L12A, SkillsPreferred:AA, status: LN, duration: "12 hours", assignedTo:"", schedule:WT, location: "" },
    {indo:"31", time: L12A, SkillsPreferred:AA, status: "", duration: "12 hours", assignedTo:"", schedule:FS, location: "" },
    // Technical Support
    {indo:"29", time: L12A, SkillsPreferred:IT, status: LN, duration: "12 hours", assignedTo:"", schedule:MT, location: "" },
    {indo:"30", time: L12A, SkillsPreferred:IT, status: LN, duration: "12 hours", assignedTo:"", schedule:WT, location: "" },
    {indo:"31", time: L12A, SkillsPreferred:IT, status: "", duration: "12 hours", assignedTo:"", schedule:FS, location: "" },
    // Finals OT
    {indo:"32", time: "10:30am to 4:30pm", status: "Finals OT", duration: "6 hours", assignedTo:"", schedule:"December 7", location: "" },
    {indo:"33", time: "10:30pm to 4:30am", status: "Finals OT", duration: "6 hours", assignedTo:"", schedule:"December 7", location: "" },
    {indo:"34", time: "5:30pm to 11:30pm",  status: "Finals OT", duration: "6 hours", assignedTo:"", schedule:"December 7", location: "" },
    {indo:"35", time: "8:00am to 2:00pm", status: "Finals OT", duration: "6 hours", assignedTo:"", schedule:"December 7", location: "" },
    {indo:"36", time: "10:30am to 4:30pm", status: "Finals OT", duration: "6 hours", assignedTo:"", schedule:"December 8", location: "" },
    {indo:"37", time: "10:30pm to 4:30am", status: "Finals OT", duration: "6 hours", assignedTo:"", schedule:"December 8", location: "" },
    {indo:"38", time: "5:30pm to 11:30pm",  status: "Finals OT", duration: "6 hours", assignedTo:"", schedule:"December 8", location: "" },
    {indo:"39", time: "8:00am to 2:00pm", status: "Finals OT", duration: "6 hours", assignedTo:"", schedule:"December 8", location: "" },

].map(shift => ({ ...commonProperties, ...shift })); 


  const [isAccepted, setIsAccepted] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState('');


  const handleAcceptShift = () => {
    setIsAccepted(true);
  };
  
  const handleFilterChange = (filterName) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };
  
  const filteredShifts = shifts.filter(shift => {
    return Object.keys(filters).every(filterName => {
      if (!filters[filterName]) return true;
      return shift.SkillsPreferred === filterName;
    });
  }
  );
  return (
    <>
{Object.keys(filters).map((filterName) => (
  <label key={filterName} className="checkbox-label">
    <input
      type="checkbox"
      checked={filters[filterName]}
      onChange={() => handleFilterChange(filterName)}
      className="checkbox-input"
    />
    {filterName}
  </label>
))}

      {filteredShifts.map((shift, index) => (
        <div key={index} className="shift-card">
          <div className="shift-info">
            <h3>{shift.time} <span className="shift-duration">({shift.duration})</span></h3>
            <p>{shift.location}</p>
            <p className="status">{shift.status}</p>
            <p><b>{shift.schedule}</b></p>
            <div className="shift-warnings">
              <span className="warning">
                <span role="img" aria-label="warning"><TfiHeadphoneAlt/></span> {shift.MainTask}
              </span>
              <span className="ineligible">
                <span role="img" aria-label="not-allowed"><BsStack /></span> {shift.SkillsPreferred}
              </span>
              <span className="ineligible"><i>Shift # {shift.indo}</i></span>
            </div>
            <div className='assignment'>{shift.assignedTo}</div>
          </div>
          <div className="shift-actions">
            <div className="shift-rate">
              <span><BsCashStack/> {shift.rate}</span>
            </div>
            <button className="details-button" onClick={handleAcceptShift}>Add Shift</button>
            {isAccepted && <p>Shift Accepted</p>}
          </div>
        </div>
      ))}
    </>
  );
};

export default ShiftCard;
