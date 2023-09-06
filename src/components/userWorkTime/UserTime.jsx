import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import styles from "./UserTime.module.css";

const UserTime = ({ scheduleFixTime }) => {
  const {
    activeSchedule,
    handleFromClock,
    fromClock,
    handleEndClock,
    endClock,
    handleExtraTimeMoney,
  } = useContext(JobContext);

  var firstClock = fromClock.replace(/:/, ".");
  var secondClock = endClock.replace(/:/, ".");
  var result = Math.round((secondClock - firstClock) * 100) / 100;
  var [schetuleTimeHours, scheduleTimeMinutes] = result.toString().split(".")
  
  var scheduleFixTime;

  const scheduleFixTimeHandler = () => {
    switch (activeSchedule) {
      case "day":
        return (scheduleFixTime = 9);
      case "night":
        return (scheduleFixTime = 12);
      case "dayOrNight":
        return (scheduleFixTime = 4);
      default:
        return (scheduleFixTime = 9);
    }
  };

  const checkIfTimeIsPos = (time, fixTime) => {
    let [hours, mins] = time.toString().split(".");
    // Switchi xdeba imitom rom wutebis machvenebeli tu iqneboda 10 wuti gamoqonda rogorc erti da xels mishlida 60 wutze gaxdomis dros saatis raodenobis momatebistvis amitomac yvela ateuli wutis shemtxvevashi gadavakete
    switch (mins) {
      case "1":
        mins = "10";
      case "2":
        mins = "20";
      case "3":
        mins = "30";
      case "4":
        mins = "40";
      case "5":
        mins = "50";
      case "6":
        mins = "60";
      case "7":
        mins = "70";
      case "8":
        mins = "80";
      case "9":
        mins = "90";
      default:
        console.log("00:00");
    }

    // Tu wutebis raodenoba gamoklebisas gacdeba 59 mashin saats moematos ertit
    if (mins > 59) {
      hours++;
    }

    // Tu gamoklebisas saatis raodenoba meti iqneba cxra saatze gamoitanos bonus xelfasi
    if (hours >= fixTime) {
      let [userHours, userMinutes] = time.toString().split(".");

      if (userMinutes > 0) {
        userHours++;
      }

      const extraTimeMoney = (userHours - fixTime) * 5; //damatebit saatebze gamomushavebuli tanxis odenoba

      if (mins > 0 || mins === undefined) {
        return handleExtraTimeMoney(extraTimeMoney);
      }
    } else {
      handleExtraTimeMoney(0);
    }
  };

  return (
    <>
      <div className={styles.clocks_container}>
        <div className={styles.am_pm_container}>
          <span>PM=12:00-24:00</span>
          <span>AM=24:00-12:00</span>
        </div>
        <div>
          <fieldset className={styles.fromTime}>
            <legend>რა დროიდან?</legend>
            <div>
              <input
                type="time"
                id="appt"
                name="appt"
                required
                onChange={(e) => handleFromClock(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset className={styles.toTime}>
            <legend>რა დრომდე?</legend>
            <div>
              <input
                type="time"
                id="appt"
                name="appt"
                required
                onChange={(e) => handleEndClock(e.target.value)}
              />
            </div>
          </fieldset>
        </div>
        {/* <h1>{result} სთ</h1> */}
        {checkIfTimeIsPos(result, scheduleFixTimeHandler())}
        {
          parseInt(schetuleTimeHours) <= 0 ? <span>თქვენი არჩეული სამუშაო საათები ნულის ტოლი ან ნაკლებია</span> : <span>{schetuleTimeHours} საათიანი გრაფიკი</span>
        }
      </div>
    </>
  );
};

export default UserTime;
