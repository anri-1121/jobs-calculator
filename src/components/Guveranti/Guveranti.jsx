import React, {  useEffect } from "react";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import styles from './Guveranti.module.css';
import UserTime from "../userWorkTime/UserTime.jsx";
import { dzidzaSchedule } from "../../data";

const Guveranti = () => {
  const { activeSchedule, handleActiveSchedule, handleActiveChildAges, activeChildAges, handleNumberOfDays, numberOfDays, CalcCompensation, handleHourCompensation } = useContext(JobContext);
  
  const childAgeStatus = false;

  const handleChildAge = (schedule) => {
    switch(activeSchedule) {
      case "day":
        return schedule = false;
      case "night":
        return schedule = false;
      case "dayOrNight":
        return schedule = false;
      case "dayAndNight":
        return schedule = false;
      case "daily":
        return schedule = true;
      case "hourly":
        return schedule = true;
      default:
        return schedule = false;
    }
  }

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
  })

  return (
    <div style={{ display: "flex", flexDirection:"column", gap:"25px" }}>
      <div className={styles.schedule_of_the_day}>
        <label>სამუშაო გრაფიკი</label>
        <select name="schedule" id="schedule" className={styles.options} onChange={(e) => handleActiveSchedule(e.target.value)}>
          <option value="day">დღის გრაფიკი</option>
          <option value="night">ღამის გრაფიკი</option>
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
      {/*qreba roca ganrigi aris dgiuri saatobrivi an ertjeradi */}
      <div className={styles.child_age} style={handleChildAge(childAgeStatus) ? {display:"none"} : {display: "flex"}}>
        <label>ბავშვის ასაკი</label>
        <select name="childAges" id="childAges" className={styles.options} onChange={(e) => handleActiveChildAges(e.target.value)}>
          <option value="newbornBaby">3-6 წლამდე</option>
          <option value="ertwlamde">6-10 წლამდე</option>
          <option value="atsplius">10-15 წლამდე</option>
          <option value="orzemetibavshvi">2+ ბავშვთან</option>
        </select>
      </div>
      {/*chans roca ganrigi aris dgiuri saatobrivi an ertjeradi */}
      <div className={styles.child_age} style={handleChildAge(childAgeStatus) ? {display: "flex"} : {display:"none"}} onChange={(e) => handleActiveChildAges(e.target.value)}>
        <label>ბავშვების რაოდენობა/მდგომარეობა </label>
        <select name="childAges" id="childAges" className={styles.options} >
          <option value="newbornBaby">1 ბავშვთან</option>
          <option value="ertwlamde">2 ბავშვთან</option>
          <option value="atsplius">3+ ბავშვთან</option>
          <option value="disabilities">შშმ</option>
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
      {/* Gamis ganrigi */}
      <div style={activeSchedule === "night" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>კვირაში რამდენი სამუშაო ღამე?</label>  
        <select name="workDays" id="workDays" className={styles.options} onChange={(e) => handleNumberOfDays(e.target.value)}>
          <option value="1">1 ღამე</option>
          <option value="2">2 ღამე</option>
          <option value="3">3 ღამე</option>
          <option value="4">4 ღამე</option>
          <option value="5">5 ღამე</option>
          <option value="6">6 ღამე</option>
        </select>
      </div>
      {/* Naxevar ganakvetze */}
      <div style={activeSchedule === "dayOrNight" ? {display: "flex", gap:"20px"} : {display:"none"}} className={styles.daysInput}>
        <div className={styles.questions}>
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
      </div>
      {/* sadgegamiso ganakvetze */}
      <div style={activeSchedule === "dayAndNight" ? {display: "flex"} : {display:"none"}} className={styles.daysInput} >
        <label>კვირაში რამდენი სამუშაო დღე-ღამე?</label>  
        <select name="workDays" id="workDays" className={styles.options} onChange={(e) => handleNumberOfDays(e.target.value)}>
          <option value="1">1 დღე-ღამე</option>
          <option value="2">2 დღე-ღამე</option>
          <option value="3">3 დღე-ღამე</option>
          <option value="4">4 დღე-ღამე</option>
          <option value="5">5 დღე-ღამე</option>
          <option value="6">6 დღე-ღამე</option>
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
      {/* saatobrivi ganrigi */}
      <div style={activeSchedule === "hourly" ? {display: "flex"} : {display:"none"}} className={styles.daysInput}>
        <label>რამდენი სამუშაო საათი?</label>  
        <select name="workDays" id="workDays" className={styles.options} onChange={(e) => handleHourCompensation(e.target.value)}>
            <option value="1">1 სთ</option>
            <option value="2">2 სთ</option>
            <option value="3">3 სთ</option>
            <option value="4">4 სთ</option>
            <option value="5">5 სთ</option>
            <option value="6">6 სთ</option>
            <option value="7">7 სთ</option>
            <option value="8">8 სთ</option>
            <option value="9">9 სთ</option>
            <option value="10">10 სთ</option>
            <option value="11">11 სთ</option>
            <option value="12">12 სთ</option>
        </select>
      </div>
    </div>
  );
};

export default Guveranti;
