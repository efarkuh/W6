import { useState, useEffect} from "react";
import PageHeader from "./components/PageHeader";
import CountButton from "./components/CountButton";
import ListOfItems from "./components/ListOfItems";
import CountButton100 from "./components/CountButton100";

export default function App() {
  const [count, setCount] = useState(parseInt(localStorage.getItem('count')) || 0 );
  const [totalCookies, setTotalCookies] = useState(parseInt(localStorage.getItem('totalCookies')) || 0  );
  const [timer, setTimer] = useState(parseFloat(localStorage.getItem('timerReciprocal')) ? 1 / parseFloat(localStorage.getItem('timerReciprocal')) : 1000);
  const [seconds, setSeconds] = useState(1); // New state variable for seconds
  const [intervalSet, setIntervalSet] = useState(false);
  // const [timer, setTimer] = useState(1000); // interval duration in milliseconds
  const [countloop, setCountloop] = useState (1);
  // const [totalCookies, setTotalCookies] = useState(0);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isButtonPressed2, setIsButtonPressed2] = useState(false);
  const [isButtonPressed3, setIsButtonPressed3] = useState(false);
  const [isButtonPressed4, setIsButtonPressed4] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white'); // New state for background color
  const [fontColor, setFontColor] = useState('black'); // New state for background color
  const [fontType, setFontType] = useState('Arial'); // New state for background color
  const [fontSize, setFontSize] = useState('16px'); // New state for background color
  

  const handleButtonPress = (buttonId) => {
    if (buttonId === 'b1') {
      setIsButtonPressed(true);
      setCount(prevCount => prevCount - 100); // Reduce count by 100
      setBackgroundColor('tomato'); // Change background color to tomato
    } else if (buttonId === 'b2') {
      setIsButtonPressed2(true);
      setCount(prevCount => prevCount - 500); // Reduce count by 500
      setFontColor('blue'); // Change background color to blue
    } else if (buttonId === 'b3') {
      setIsButtonPressed3(true);
      setCount(prevCount => prevCount - 1000); // Reduce count by 1000
      setFontType('Courier New'); // Change background color to tomato
    } else if (buttonId === 'b4') {
      setIsButtonPressed4(true);
      setCount(prevCount => prevCount - 2000); // Reduce count by 100
      setFontSize('24px'); // Change background color to tomato
    }
  }

  function handleCount() {
    setCount(count + 1);
    setTotalCookies(totalCookies + 1);
    setIntervalSet(true);
  }

  function handleCount100() {
    setCount(count + 100);
    setTotalCookies(totalCookies + 100);
  }


  useEffect(() => {
    const interval = setInterval(() => {
        if (intervalSet) {
        setCount((count) => count + 1);
        setTotalCookies((totalCookies) => totalCookies + 1)};
      }, timer);
    return () => clearInterval(interval);
  }, [intervalSet, timer]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      if (intervalSet) {
        setSeconds((seconds) => seconds + 1)};
      }, 1000);
    return () => clearInterval(interval2);
  }, [intervalSet]);

  useEffect(() => {
    if (seconds > 0 && seconds % 5 === 0) {
      setCountloop(countloop + 1);
    }
  }, [seconds]);

  useEffect(() => {
    setTimer(timer/ countloop);
    console.log(timer);
  }, [countloop]);

// UseEffect hook to store count in local storage
useEffect(() => {
  localStorage.setItem('count', count.toString());
}, [count]);

// UseEffect hook to store totalCookies in local storage
useEffect(() => {
  localStorage.setItem('totalCookies', totalCookies.toString());
}, [totalCookies]);

// UseEffect hook to store reciprocal of timer in local storage
useEffect(() => {
  localStorage.setItem('timerReciprocal', (1 / timer).toString());
}, [timer]);


  return (
    
    <div style={{ backgroundColor: backgroundColor, fontFamily: fontType , color : fontColor, fontSize: fontSize }}> {/* Apply the background color */}
      <PageHeader count={count} />
      <p> Total cookies earned: {totalCookies}</p>
      <CountButton handleCount={handleCount} />
      <CountButton100 totalCookies={totalCookies} handleCount100={handleCount100} />
      <ListOfItems 
        count={count} 
        onButtonPress={handleButtonPress} 
        isButtonPressed={isButtonPressed} 
        isButtonPressed2={isButtonPressed2} 
        isButtonPressed3={isButtonPressed3} 
        isButtonPressed4={isButtonPressed4} 
      />
      {/*<p>Seconds Elapsed: {seconds}</p>  Display the seconds */}
      {/* <p>Count Loop: {countloop}</p> */}
    </div>
  );
}
