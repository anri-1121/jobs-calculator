import React, {  useEffect, useState } from "react";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import styles from './BagisMaswavlebeli.module.css';
import { bagisAgmzrdeli } from "../../data";

const BagisMaswavlebeli = () => {
  const { activeSchedule, handleActiveSchedule, handleActiveChildAges, activeChildAges, handleNumberOfDays, numberOfDays, CalcCompensation } = useContext(JobContext);
  const [ childsGroups, setChildsGroup ] = useState("first_groups");
  console.log(childsGroups);


  // CALCULATION PLACE
  let scheduleCategory = bagisAgmzrdeli.filter((sch) => sch.scheduleCat === activeSchedule)[0].scheduleCat;
  let fixJobsPrice = bagisAgmzrdeli.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].fixPrice;
  let workdaysInmonth = bagisAgmzrdeli.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].workdaysInMonth;
  let profitablePrice = bagisAgmzrdeli.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].profitablePrice;
  
  useEffect(() => {
    if(scheduleCategory) {
      switch(activeChildAges) {
        case "newbornBaby": 
          if(childsGroups === "first_group") {
            return CalcCompensation(fixJobsPrice, profitablePrice * 0, workdaysInmonth)
          };
          if(childsGroups === "second_group") {
            return CalcCompensation(fixJobsPrice, profitablePrice * 1, workdaysInmonth)
          };
          if(childsGroups === "third_group") {
            return CalcCompensation(fixJobsPrice, profitablePrice * 2, workdaysInmonth)
          }else {
            return CalcCompensation(fixJobsPrice, profitablePrice * 0, workdaysInmonth)
          }
        case "ertwlamde":
          if(childsGroups === "first_group") {
            return CalcCompensation(fixJobsPrice, profitablePrice * 2, workdaysInmonth)
          };
          if(childsGroups === "second_group") {
            return CalcCompensation(fixJobsPrice, profitablePrice * 3, workdaysInmonth)
          };
          if(childsGroups === "third_group") {
            return CalcCompensation(fixJobsPrice, profitablePrice * 4, workdaysInmonth)
          }else {
            return CalcCompensation(fixJobsPrice, profitablePrice * 2, workdaysInmonth)
          }
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
        </select>
      </div>
      {/*qreba roca ganrigi aris dgiuri saatobrivi an ertjeradi */}
      <div className={styles.child_age}>
        <label>ბაღის კანდიდატურა</label>
        <select name="childAges" id="childAges" className={styles.options} onChange={(e) => handleActiveChildAges(e.target.value)}>
          <option value="newbornBaby">ძიძა</option>
          <option value="ertwlamde">აღმზრდელი</option>
        </select>
      </div>
      {/* momxmareblis mier archeuli scenarebi⬇️ */}
      {/* Dgis ganrigi */}
      <div className={styles.daysInput}>
        <label>ბავშვთა ასაკის ჯგუფები</label>  
        <select name="childAges" id="childAges" className={styles.options} onChange={(e) => setChildsGroup(e.target.value)}>
          <option value="first_group">2-3 წლის ასაკის I-ჯგუფის ბავშვებთან</option>
          <option value="second_group">4-5 წლის ასაკის II-ჯგუფის ბავშვებთან</option>
          <option value="third_group">5-6 წლის ასაკის III-ჯგუფის ბავშვებთან</option>
        </select>
      </div>
      <div className={styles.daysInput}>
        <label>კვირაში რამდენი სამუშაო დღე?</label>  
        <select name="childAges" id="childAges" className={styles.options} onChange={(e) => handleNumberOfDays(e.target.value)}>
          <option value="1">5 დღიანი</option>
          <option value="2">6 დღიანი</option>
        </select>
      </div>
    </div>
  );
};

export default BagisMaswavlebeli;
