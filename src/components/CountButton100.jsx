export default function CountButton100({ totalCookies, handleCount100 }) {
  return (
      <>
          {totalCookies > 100 && <button onClick={handleCount100}>Increase 100 cookies</button>}
      </>
  );
}
