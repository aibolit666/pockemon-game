import { useState } from "react";

import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({ bgActive }) => {

  const [isOpen, setOpen] = useState(null);
  const handleClickHamburger = () => {

    setOpen(prevState => !prevState);

  };
  return (
    <>
      <Menu isOpen={isOpen} setState={setOpen}/>
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        setState={handleClickHamburger}
      />
    </>
  );
};

export default MenuHeader;
