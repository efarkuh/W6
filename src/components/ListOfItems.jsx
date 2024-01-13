export default function ListOfItems({ count, onButtonPress, isButtonPressed, isButtonPressed2, isButtonPressed3, isButtonPressed4 }) {
  return (
      <>
        <h2>Style List Options</h2>
        <div className="flex-container">
          <div className="row">
            <span>Change Backgroung color</span>
            <span>100 Cookies</span>
            <button 
            id="b1" 
            onClick={() => onButtonPress('b1')} 
            disabled={count <= 100 || isButtonPressed}
          >Buy</button>
          </div>
          <div className="row">
            <span>Change font color</span>
            <span>500 Cookies</span>
            <button 
            id="b2" 
            onClick={() => onButtonPress('b2')} 
            disabled={count <= 500 || isButtonPressed2}
          >Buy</button>
          </div>
          <div className="row">
            <span>Font Type</span>
            <span>1,000 Cookies</span>
            <button 
            id="b3" 
            onClick={() => onButtonPress('b3')} 
            disabled={count <= 1000 || isButtonPressed3}
          >Buy</button>
          </div>
          <div className="row">
            <span>Font-size</span>
            <span>2,000 Cookies</span>
            <button 
            id="b4" 
            onClick={() => onButtonPress('b4')} 
            disabled={count <= 2000 || isButtonPressed4}
          >Buy</button>
          </div>
        </div>
      </>
  );
}
