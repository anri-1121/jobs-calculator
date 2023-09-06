import React, {  useEffect } from "react";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import styles from './OjaxuriWyvili.module.css';
import { ojaxuriWyvili } from "../../data";

const OjaxuriWyvili = () => {
  const { activeSchedule, handleActiveSchedule, handleActiveChildAges, activeChildAges, numberOfDays, CalcCompensation } = useContext(JobContext);

  // CALCULATION PLACE
  let scheduleCategory = ojaxuriWyvili.filter((sch) => sch.scheduleCat === activeSchedule)[0].scheduleCat;
  let fixJobsPrice = ojaxuriWyvili.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].fixPrice;
  let workdaysInmonth = ojaxuriWyvili.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].workdaysInMonth;
  let profitablePrice = ojaxuriWyvili.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].profitablePrice;
  
  useEffect(() => {
    if(scheduleCategory) {
      switch(activeChildAges) {
        case "newbornBaby": 
          return CalcCompensation(fixJobsPrice, profitablePrice * 0, workdaysInmonth);
        case "ertwlamde":
          return CalcCompensation(fixJobsPrice, profitablePrice * 1, workdaysInmonth);
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
          <option value="dayAndNight">სადღეღამისო</option>
        </select>
      </div>
      <div className={styles.child_age}>
        <label>ოჯახური წყვილები სოფლად</label>
        <select name="childAges" id="childAges" className={styles.options} onChange={(e) => handleActiveChildAges(e.target.value)}>
          <option value="newbornBaby">შინაური ცხოველების გარეშე</option>
          <option value="ertwlamde">შინაური ცხოველების ჩათვლით</option>
        </select>
      </div>
    </div>
  );
};

export default OjaxuriWyvili;
