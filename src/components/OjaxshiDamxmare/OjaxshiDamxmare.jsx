import React, {  useEffect } from "react";
import styles from './OjaxshiDamxmare.module.css';
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import UserTime from "../userWorkTime/UserTime.jsx";
import { dzidzaSchedule } from "../../data";

const OjaxshiDamxmare = () => {
    const { activeSchedule, handleActiveSchedule, handleActiveChildAges, activeChildAges, handleNumberOfDays, numberOfDays, CalcCompensation, handleHourCompensation } = useContext(JobContext);
  
    // CALCULATION PLACE
    let scheduleCategory = dzidzaSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].scheduleCat;
    let fixJobsPrice = dzidzaSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].fixPrice;
    let workdaysInmonth = dzidzaSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].workdaysInMonth;
    let profitablePrice = dzidzaSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].profitablePrice;
    
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
    });
    
    return(
    <div style={{ display: "flex", flexDirection:"column", gap:"25px" }}>
      <div className={styles.schedule_of_the_day}>
        <label>სამუშაო გრაფიკი</label>
        <select name="schedule" id="schedule" className={styles.options} onChange={(e) => handleActiveSchedule(e.target.value)}>
          <option value="day">დღის გრაფიკი</option>
          <option value="dayOrNight">ნახევარ განაკვეთზე</option>
          <option value="dayAndNight">სადღეღამისო</option>
          <option value="daily">დღიური</option>
          <option value="hourly">საათობრივი</option>
        </select>
      </div>
      
      {/* User Input Clocks Place */}
      <div style={activeSchedule === "day" ? {display: "flex"} : {display:"none"}}>
        <UserTime/>
      </div>
      <div style={activeSchedule === "night" ? {display: "flex"} : {display:"none"}}>
        <UserTime/>
      </div>
      <div style={activeSchedule === "dayOrNight" ? {display: "flex"} : {display:"none"}}>
        <UserTime/>
      </div>
      <div style={activeSchedule === "daily" ? {display: "flex"} : {display:"none"}}>
        <UserTime/>
      </div>
      {/* User Input Clocks Place End */}

      <div>
        <label>ფართობის მოცულობა</label>
        <select name="childAges" id="childAges" className={styles.options} onChange={(e) => handleActiveChildAges(e.target.value)}>
          <option value="newbornBaby">100 კვ.მ-მდე</option>
          <option value="ertwlamde">100-150კვ.მ-მდე</option>
          <option value="atsplius">150-200კვ.მ-მდე</option>
          <option value="orzemetibavshvi">200-250კვ.მ-მდე</option>
          <option value="disabilities">300 + კვ.მ-მდე</option>
        </select>
      </div>
      {/* momxmareblis mier archeuli scenarebi⬇️ */}
      {/* Dgis ganrigi */}
      <div style={activeSchedule === "day" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>კვირაში რამდენი სამუშაო დღე?</label>  
        <input type="number" id="days" min="1" max="6" className={styles.options} placeholder="მაქსიმუმ 6 დღე" onChange={(e) => handleNumberOfDays(e.target.value)}/>
      </div>
      {/* Naxevar ganakvetze */}
      <div style={activeSchedule === "dayOrNight" ? {display: "flex", gap:"20px"} : {display:"none"}} className={styles.daysInput}>
        <div className={styles.questions}>
          <label>კვირაში რამდენი სამუშაო დღე?</label>  
          <input type="number" id="days" min="1" max="6" className={styles.options} placeholder="მაქსიმუმ 6 დღე" onChange={(e) => handleNumberOfDays(e.target.value)}/>
        </div>
      </div>
      {/* sadgegamiso ganakvetze */}
      <div style={activeSchedule === "dayAndNight" ? {display: "flex"} : {display:"none"}} className={styles.daysInput} >
        <label>კვირაში რამდენი სამუშაო დღე-ღამე?</label>  
        <input type="number" id="days" min="1" max="6" className={styles.options} placeholder="მაქსიმუმ 6 დღე-ღამე" onChange={(e) => handleNumberOfDays(e.target.value)}/>
      </div>
      {/* dgiuri ganrigi */}
      <div style={activeSchedule === "daily" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>რამდენი სამუშაო დღე?</label>  
        <input type="number" id="days" min="1" max="25" className={styles.options} placeholder="მაქსიმუმ 25 დღე" onChange={(e) => handleNumberOfDays(e.target.value)}/>
      </div>
      {/* saatobrivi ganrigi */}
      <div style={activeSchedule === "hourly" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>რამდენი სამუშაო საათი?</label>  
        <input type="number" id="days" min="1" max="12" className={styles.options} placeholder="მაქსიმუმ 12 საათი" onChange={(e) => handleHourCompensation(e.target.value)}/>
      </div>
    </div>
    )
}

export default OjaxshiDamxmare