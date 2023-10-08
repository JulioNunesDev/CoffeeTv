import S from "./styled";
import raio from "../../assets/raio.svg";
import raioactive from "../../assets/raioactive.svg";
import coroa from "../../assets/coroa.svg";
import coroaactive from "../../assets/coroaactive.svg";
import saco from "../../assets/sacoactive.svg";
import sacoactive from "../../assets/saco.svg";
import control from "../../assets/control.svg";
import controlactive from "../../assets/controlactivess.svg";

import xbox from "../../assets/companies/xbox.svg";
import epic from "../../assets/companies/epic.svg";
import steam from "../../assets/companies/steam.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

type T = string;

function HeaderMain() {
  const [activeItem, setActiveItem] = useState<T>("home");

  const handleItemClick = (event: T) => {
    setActiveItem(event);
  };

  return (
    <S.boxContainer>
      <S.navContainer>
        <S.ulList>
          <S.itemList
            to="/"
            className={activeItem === "home" ? "active" : ""}
            onClick={() => handleItemClick("home")}
          >
            {activeItem === "home" ? (
              <img src={coroaactive} alt="" />
            ) : (
              <img src={coroa} alt="" />
            )}
            Home
          </S.itemList>
          <S.itemList
            to="/games"
            className={activeItem === "games" ? "active" : ""}
            onClick={() => handleItemClick("games")}
          >
            {activeItem === "games" ? (
              <img src={controlactive} alt="" />
            ) : (
              <img src={control} alt="" />
            )}
            My Games
          </S.itemList>
          <S.itemList
            to="/lives"
            className={activeItem === "lives" ? "active" : ""}
            onClick={() => handleItemClick("lives")}
          >
            {activeItem === "lives" ? (
              <img src={sacoactive} alt="" />
            ) : (
              <img src={saco} alt="" />
            )}
            Lives
          </S.itemList>
          <S.itemList
            to="/active"
            className={activeItem === "active" ? "active" : ""}
            onClick={() => handleItemClick("active")}
          >
            {activeItem === "active" ? (
              <img src={raioactive} alt="" />
            ) : (
              <img src={raio} alt="" />
            )}
            Active
          </S.itemList>
        </S.ulList>
      </S.navContainer>

      <S.listCompanies>
        <S.navContainerTwo>
          <ul>
            <li>
              <a href="">
                <img src={xbox} alt="" />
                Xbox
              </a>
            </li>
            <li>
              <a href="">
                <img src={epic} alt="" />
                Epic
              </a>
            </li>
            <li>
              <a href="">
                <img src={steam} alt="" />
                Steam
              </a>
            </li>
          </ul>
          <ul className="list">
            <li>

            <Link className="login" to='/login'>
              Login
            </Link>
            </li>
            <li>

            <Link className="login" to='/Register'>
              Register
            </Link>
            </li>
          </ul>
        </S.navContainerTwo>
      </S.listCompanies>
    </S.boxContainer>
  );
}

export default HeaderMain;
