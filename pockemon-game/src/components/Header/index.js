import s from "./style.module.css";
import { useHistory } from "react-router-dom";

const Header = ({ id, title, descr}) => {
  const history = useHistory()
  const handleClick = () => {
    history.push('/game')
  };
  return (
    <header className={s.root} id={id}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <button onClick={handleClick}>Start Game</button>
      </div>
    </header>
  );
};

export default Header;
