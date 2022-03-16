import { useHistory } from "react-router-dom";

const GamePage = () => {
  const history = useHistory()
  const handleClickButton = () => {
    history.push('/')
  };
  return (
    <>
    <div id="game">Game page</div>
    <button onClick={handleClickButton}>Home</button>
    </>
  );
}
export default GamePage