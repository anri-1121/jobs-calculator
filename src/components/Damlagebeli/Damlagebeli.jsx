import React, {  useEffect } from "react";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import styles from './Damlagebeli.module.css';
import UserTime from "../userWorkTime/UserTime.jsx";
import { damlagebeliSchedule } from "../../data";

const Damlagebeli = () => {
  const { activeSchedule, handleActiveSchedule, handleActiveChildAges, activeChildAges, handleNumberOfDays, numberOfDays, CalcCompensation, handleHourCompensation } = useContext(JobContext);
  

  const childAgeStatus = false;

  const handleChildAge = (schedule) => {
    switch(activeSchedule) {
      case "day":
        return schedule = false;
      case "daily":
        return schedule = true;
      default:
        return schedule = false;
    }
  }

  // CALCULATION PLACE
  let scheduleCategory = damlagebeliSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].scheduleCat;
  let fixJobsPrice = damlagebeliSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].fixPrice;
  let workdaysInmonth = damlagebeliSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].workdaysInMonth;
  let profitablePrice = damlagebeliSchedule.filter((sch) => sch.scheduleCat === activeSchedule)[0].fixPriceArr.filter((i) => i.daysNum === numberOfDays)[0].profitablePrice;
  
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
      <div className={styles.child_age} style={handleChildAge(childAgeStatus) ? {display:"none"} : {display: "flex"}}>
        <label>ობიექტი</label>
        <select name="childAges" id="childAges" className={styles.options} onChange={(e) => handleActiveChildAges(e.target.value)}>
          <option value="newbornBaby">ოფისი</option>
          <option value="ertwlamde">სკოლა/ბაღი</option>
          <option value="atsplius">მაღაზია</option>
          <option value="orzemetibavshvi">სასტუმრო</option>
          <option value="disabilities">კვების ობიექტი</option>
        </select>
      </div>
      {/*chans roca ganrigi aris dgiuri saatobrivi an ertjeradi */}
      <div className={styles.child_age} style={handleChildAge(childAgeStatus) ? {display: "flex"} : {display:"none"}} onChange={(e) => handleActiveChildAges(e.target.value)}>
        <label>გენერალური დალაგება ბინა/სახლი</label>
        <select name="childAges" id="childAges" className={styles.options} >
          <option value="newbornBaby">100 კვ.მ-მდე</option>
          <option value="ertwlamde">100-150 კვ.მ-მდე</option>
          <option value="atsplius">150-200 კვ.მ-მდე</option>
          <option value="orzemetibavshvi">200-250 კვ.მ-მდე</option>
          <option value="disabilities">300+ კვ.მ-მდე</option>
        </select>
      </div>
      {/* momxmareblis mier archeuli scenarebi⬇️ */}
      {/* Dgis ganrigi */}
      <div style={activeSchedule === "day" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>კვირაში რამდენი სამუშაო დღე?</label>  
        <select name="workDays" id="workDays" className={styles.options} onChange={(e) => handleNumberOfDays(e.target.value)}>
          <option value="1">1 დღე</option>
          <option value="2">2 დღე</option>
          <option value="3">3 დღე</option>
          <option value="4">4 დღე</option>
          <option value="5">5 დღე</option>
          <option value="6">6 დღე</option>
        </select>
      </div>
      {/* dgiuri ganrigi */}
      <div style={activeSchedule === "daily" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>რამდენი სამუშაო დღე?</label>  
        <select name="workDays" id="workDays" className={styles.options} onChange={(e) => handleNumberOfDays(e.target.value)}>
            <option value="1">1 დღე</option>
            <option value="2">2 დღე</option>
            <option value="3">3 დღე</option>
            <option value="4">4 დღე</option>
            <option value="5">5 დღე</option>
            <option value="6">6 დღე</option>
            <option value="7">7 დღე</option>
            <option value="8">8 დღე</option>
            <option value="9">9 დღე</option>
            <option value="10">10 დღე</option>
            <option value="11">11 დღე</option>
            <option value="12">12 დღე</option>
            <option value="13">13 დღე</option>
            <option value="14">14 დღე</option>
            <option value="15">15 დღე</option>
            <option value="16">16 დღე</option>
            <option value="17">17 დღე</option>
            <option value="18">18 დღე</option>
            <option value="19">19 დღე</option>
            <option value="20">20 დღე</option>
            <option value="21">21 დღე</option>
            <option value="22">22 დღე</option>
            <option value="23">23 დღე</option>
            <option value="24">24 დღე</option>
            <option value="25">25 დღე</option>
          </select>
      </div>
    </div>
  );
};

export default Damlagebeli;
