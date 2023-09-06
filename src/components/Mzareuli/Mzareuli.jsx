import React, {  useEffect } from "react";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import styles from './Mzareuli.module.css';
import UserTime from "../userWorkTime/UserTime.jsx";
import { mzareuliSchedule } from "../../data";

const Mzareuli = () => {
  const { activeSchedule, handleActiveSchedule, handleActiveChildAges, activeChildAges, handleNumberOfDays, numberOfDays, CalcCompensation } = useContext(JobContext);

  // CALCULATION PLACE
  let scheduleCategory = mzareuliSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].scheduleCat;
  let fixJobsPrice = mzareuliSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].fixPrice;
  let workdaysInmonth = mzareuliSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].workdaysInMonth;
  let profitablePrice = mzareuliSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].profitablePrice;
  
  useEffect(() => {
    if(scheduleCategory) {
      switch(activeChildAges) {
        case "newbornBaby": 
          return CalcCompensation(fixJobsPrice, profitablePrice * 0, workdaysInmonth);
        case "ertwlamde":
          return CalcCompensation(fixJobsPrice, profitablePrice * 1, workdaysInmonth);
        case "atsplius":
          return CalcCompensation(fixJobsPrice, profitablePrice * 2, workdaysInmonth);
        case "orzemetibavshvi":
          return CalcCompensation(fixJobsPrice, profitablePrice * 3, workdaysInmonth);
        case "disabilities":
          return CalcCompensation(fixJobsPrice, profitablePrice * 4, workdaysInmonth);
        default:
          console.log("childages");
      }
    }
  })

  return (
    <div style={{ display: "flex", flexDirection:"column", gap:"25px" }}>
      <div className={styles.schedule_of_the_day}>
        <label>სამუშაო გრაფიკი</label>
        <select name="schedule" id="schedule" className={styles.options} onChange={(e) => handleActiveSchedule(e.target.value)}>
          <option value="day">დღის გრაფიკი</option>
          <option value="daily">დღიური</option>
        </select>
      </div>
      {/* User Input Clocks Place */}
      <div style={activeSchedule === "day" ? {display: "flex"} : {display:"none"}}>
        <UserTime/>
      </div>
      <div style={activeSchedule === "daily" ? {display: "flex"} : {display:"none"}}>
        <UserTime/>
      </div>
      {/* User Input Clocks Place End */}
      {/*qreba roca ganrigi aris dgiuri saatobrivi an ertjeradi */}
      <div className={styles.child_age}>
        <label>მზარეული</label>
        <select name="childAges" id="childAges" className={styles.options} onChange={(e) => handleActiveChildAges(e.target.value)}>
          <option value="newbornBaby">ქართული ცივი/ცხელი კერძების მზარეული</option>
          <option value="ertwlamde">ევროპული კერძების მზარეული</option>
          <option value="atsplius">სლავური კერძების მზარეული</option>
          <option value="orzemetibavshvi">თევზეულის მზარეული</option>
          <option value="disabilities">უნივერსალური მზარეული</option>
        </select>
      </div>
      {/* momxmareblis mier archeuli scenarebi⬇️ */}
      {/* Dgis ganrigi */}
      <div style={activeSchedule === "day" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>კვირაში რამდენი სამუშაო დღე?</label>  
        <input type="number" id="days" min="1" max="6" className={styles.options} placeholder="მაქსიმუმ 6 დღე" onChange={(e) => handleNumberOfDays(e.target.value)}/>
      </div>
      {/* dgiuri ganrigi */}
      <div style={activeSchedule === "daily" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>რამდენი სამუშაო დღე?</label>  
        <input type="number" id="days" min="1" max="25" className={styles.options} placeholder="მაქსიმუმ 25 დღე" onChange={(e) => handleNumberOfDays(e.target.value)}/>
      </div>
    </div>
  );
};

export default Mzareuli;
