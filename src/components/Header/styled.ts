import { styled } from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/header.svg";

const Styleds = {
  boxContainer: styled.header`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-image: url(${logo});
   
  `,
  navContainer: styled.nav`
    max-width: 1200px;
    height: 90px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-basis: 100px;

    @media screen and (max-width: 768px){
      ul{
        display: flex;
        gap: 15px;
      }
    }
    
  `,
  ulList: styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 60px;
    justify-content: center;

    @media screen and (max-width: 478px){
    gap:0;
    }
  `,
  itemList: styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    font-size: 18px;
    font-family: var(--font-Oxa);
    transition: all 0.3s ease-in;

    &.active {
      color: var(--color-text);
    }
  `,

  listCompanies: styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  navContainerTwo: styled.nav`
    width: 1200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .list{
    gap: 10px;
    margin: 20px;
    display: block;

    .login{
        color: #fff;
        text-decoration: none;

        &:hover{
          text-decoration: underline;
          color: var(--color-second);
        }
      }
    }

    ul {
      display: flex;
      align-items: center;
      gap: 25px;

      

      li {
        list-style: none;
      }
      li a {
        gap: 5px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        font-family: var(--font-Oxa);
        letter-spacing: 3px;
        font-weight: normal;
      }
    }
  `,
};

export default Styleds;
