import s from "./style.module.css";
import cn from "classnames";

const NavBar = ({ isOpen, bgActive = false, setState }) => {
  return (
      <nav
        id={s.navbar}
        className={cn(s.root, {[s.bgActive]: bgActive})}
      >
        <div className={s.navWrapper}>
          <p className={s.brand}>LOGO</p>
          <div onClick={setState}
            className={cn(s.menuButton, {
              [s.active]: isOpen === true,
            })}
            
          >
            <span />
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
