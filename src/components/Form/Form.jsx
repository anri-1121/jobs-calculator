import React, {useEffect} from "react";
import styles from "./Form.module.css";
import Dzidza from "../dzidza/Dzidza";
import OjaxshiDamxmare from "../OjaxshiDamxmare/OjaxshiDamxmare";
import AvadmyofisMomvleli from "../AvadmyofisMomvleli/AvadmyofisMomvleli";
import Guveranti from "../Guveranti/Guveranti";
import Mzareuli from "../Mzareuli/Mzareuli";
import Mdzgoli from "../Mdzgoli/Mdzgoli";
import Damlagebeli from "../Damlagebeli/Damlagebeli";
import OjaxuriWyvili from "../OjaxuriWyvili/OjaxuriWyvili";
import BagisMaswavlebeli from "../BagisMaswavlebeli/BagisMaswavlebeli";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import rightArrow from '../../resources/right_arrow.png';

const Form = () => {
  const { handleJobs, jobs, activeSchedule, finalCompensation, hourCompensation, workDaysInMonth, handleMultiLingual, multiLingualPrice } =
    useContext(JobContext);

  const handleChange = (e) => {
    handleJobs(e.target.value);
  };

  // rasac momxmarebeli airchevs magi gamoitanos ekranze 
  const handleWhatJobLoad = () => {
    switch(jobs) {
      case "dzidza":
        return <Dzidza/>;
      case "ojaxshiDamxmare":
        return <OjaxshiDamxmare/>;
      case "avadmyofisMomvleli":
        return <AvadmyofisMomvleli/>
      case "guveranti":
        return <Guveranti/>
      case "mzareuli":
        return <Mzareuli/>
      case "mdzgoli":
        return <Mdzgoli/>
      case "damlagebeli":
        return <Damlagebeli/>
      case "ojaxuriWyvili":
        return <OjaxuriWyvili/>
      case "bagisMaswavlebeli":
        return <BagisMaswavlebeli/>
      default: 
        console.log("default Jobs");
    }
  }

  
  var hoursCounter;
  const keyWorkForActiveSchedule = (smth) => {
    switch (smth) {
      case "day":
        hoursCounter = 9;
        return "დღე";
      case "night":
        hoursCounter = 12;
        return "ღამე";
      case "dayAndNight":
        hoursCounter = 24;
        return "დღე-ღამე";
      case "dayOrNight":
        hoursCounter = 4;
        return "დღე";
      default:
        hoursCounter = 9;
        return "დღე";
    }
  };

  
  return (
    <div className={styles.main_container}>
      <div className={styles.main_form}>
        <div className={styles.main_options_container}>
          <label for="jobs">აირჩიე პოზიცია</label>
          <select
            name="jobs"
            id="jobs"
            className={styles.options}
            onChange={handleChange}
          >
            <option value="dzidza">ძიძა</option>
            <option value="ojaxshiDamxmare">ოჯახში დამხმარე</option>
            <option value="avadmyofisMomvleli">ავადმყოფის მომვლელი</option>
            <option value="guveranti">გუვერნანტი</option>
            <option value="mzareuli">მზარეული</option>
            <option value="mdzgoli">მძღოლი</option>
            <option value="damlagebeli">დამლაგებელი</option>
            <option value="ojaxuriWyvili">ოჯახური წყვილი</option>
            <option value="bagisMaswavlebeli">საბავშვო ბაღის აღმზრდელი</option>
          </select>
        </div>
        {handleWhatJobLoad()}
        {/* Enebis asarchevi selecti */}
        <div className={styles.languageSelect}>
          <label>სასაუბრო ენები</label>
          <select name="language" id="language" className={styles.options} onClick={(e) => handleMultiLingual(e.target.value)}>
            <option value="qartuli">ქართული</option>
            <option value="multiLingual">უცხოენოვანი</option>
          </select>
        </div>
      </div>
      <div className={styles.result_container}>
        <div style={activeSchedule !== "hourly" ? {display:'flex', flexDirection:"column", alignItems:"center", gap:"20px"} : {display:"none"}}>
        {/* თუ არჩეულ იქნა დამლაგებელი და მისი დღიური გრაფიკი მაშინ გამოიყანოს შემდეგი თუ არადა ჩვეულებრივ */}
          {jobs === "damlagebeli" && activeSchedule ==="daily" ?
            <div className={styles.listOfPeople}>
              <h1>ანაზღაურება</h1>
              <h3>1 ადამიანი = {finalCompensation}₾</h3>
              <h3>2 ადამიანი = {finalCompensation + 40}₾</h3>
              <h3>3 ადამიანი = {finalCompensation + 85}₾</h3>
            </div> 
            : 
            <>
              <h2>ანაზღაურება თვეში = {finalCompensation + multiLingualPrice}₾</h2>
              <h2>
                {workDaysInMonth} სამუშაო {keyWorkForActiveSchedule(activeSchedule)}
                /თვეში
              </h2>
              <h3>
                {keyWorkForActiveSchedule(activeSchedule)}{" "}{Number(finalCompensation / workDaysInMonth).toFixed(1)}₾
              </h3>
              <h3>საათში {Number(finalCompensation / (hoursCounter * workDaysInMonth)).toFixed(1)}₾</h3>
            </>
          }
          <div className={styles.button_container}>
            <a href="https://hrbaia.com/ge/pages/jobsV/" target="_">
              <button className={styles.order}>იპოვეთ სამსახური<img src={rightArrow} alt="" /></button>
            </a>
            <a href="https://hrbaia.com/ge/personali/person" target="_">
              <button className={styles.order_2}>იპოვეთ პერსონალი<img src={rightArrow} alt="" /></button>
            </a>
          </div>
        </div>
        <div style={activeSchedule === "hourly" ? {display:'flex', flexDirection:"column", alignItems:"center", gap:"20px"} : {display:"none"}}>
          <h2>ანაზღაურება საათში = {finalCompensation * hourCompensation + multiLingualPrice}₾</h2>
          <div className={styles.button_container}>
            <a href="https://hrbaia.com/ge/pages/jobsV/" target="_">
              <button className={styles.order}>იპოვეთ სამსახური<img src={rightArrow} alt="" /></button>
            </a>
            <a href="https://hrbaia.com/ge/personali/person" target="_">
              <button className={styles.order_2}>იპოვეთ პერსონალი<img src={rightArrow} alt="" /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
