import { createContext, useState } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState("dzidza");
  const [ activeSchedule, setActiveSchedule ] = useState("day");
  const [ activeChildAges, setActiveChildAges ] = useState("newbornBaby");
  const [ numberOfDays, setNumberOfDays ] = useState("1");
  const [ fromClock, setFromClock ] = useState("");
  const [ endClock, setEndClock ] = useState("");
  const [ finalCompensation, setFinalCompensation ] = useState(0);
  const [ extraTimeMoney, setExtraTimeMoney ] = useState(0)
  const [ workDaysInMonth, setWorkDaysInMonth ] = useState(0);
  const [ hourCompensation, setHourCompensation ] = useState(1);
  const [ multiLingualPrice, setMultiLingualPrice ] = useState(0);

  const handleJobs = (selectedjob) => {
    setJobs(selectedjob); 
    setActiveChildAges("newbornBaby");
    setActiveSchedule("day");
    setNumberOfDays("1");
    setFromClock("");
    setEndClock("");
    setHourCompensation(1)
    setMultiLingualPrice(0)
  };

  // zedmeti saatebis anazgaureba
  const handleExtraTimeMoney = (extraMoney) => {
    setExtraTimeMoney(extraMoney)
  }
  // momxmareblis mier archeuli samushao grafikis gasagebad
  const handleActiveSchedule = (selectedSchedule) => {
    setActiveSchedule(selectedSchedule);
    setActiveChildAges("newbornBaby");
    setNumberOfDays("1");
    setMultiLingualPrice(0)
  }

  // momxmareblis mier archeuli bavshebis asakis gasagebad
  const handleActiveChildAges = (selectedChildAge) => {
    setActiveChildAges(selectedChildAge);
  }

  // momxmareblis mier archeuli samushao dgeebis raodenobis gasagebad
  const handleNumberOfDays = (selectedNumberOfDays) => {
    setNumberOfDays(selectedNumberOfDays);
 }

  // momxmareblis mier archeuli calkeuli saatebis raodenoba
  const handleHourCompensation = (selectedHourAmount) => {
    setHourCompensation(selectedHourAmount);
  }

  // saboloo fasis dasadgenad
  const CalcCompensation = (fixPrice, profitableCompensation, workDaysInMonth) => {
    setFinalCompensation(fixPrice + profitableCompensation + (workDaysInMonth * extraTimeMoney));
    setWorkDaysInMonth(workDaysInMonth)
  }
  
  // From Clock handle
  function handleFromClock(time) {
    setFromClock(time);
  }

  // End Clock handle
  const handleEndClock = (time) => {
    setEndClock(time);
  }

  // Multi language handler
  const handleMultiLingual = (isMultiLingual) => {
    if(isMultiLingual === "multiLingual") {
      setMultiLingualPrice(100);
    }
    if(isMultiLingual === "qartuli"){
      setMultiLingualPrice(0)
    }
  } 

  return (
    <JobContext.Provider value={{ handleJobs, jobs, activeSchedule, handleActiveSchedule, handleActiveChildAges, activeChildAges, handleNumberOfDays, numberOfDays, handleFromClock, fromClock, handleEndClock, endClock, CalcCompensation, finalCompensation, handleHourCompensation, hourCompensation, handleExtraTimeMoney, workDaysInMonth, handleMultiLingual, multiLingualPrice }}>
      {children}
    </JobContext.Provider>
  );
};
