import { styled } from "styled-components";

const styleds = {
  boxContainer: styled.form`
    width: 380px;
    height: 500px;
    background-color:  #0d1019;
    display: flex;
    gap: 25px;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    border-radius: 10px;
   
    h2{
    color: var(--color-primary);
    font-family: var(--font-Oxa);
    font-size: 30px;
    letter-spacing: 3px;
    }
  `,
  content: styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    


    input {
      padding: 10px;
      background-color: transparent;
      width: 100%;
      transition: all 0.2s ease;
      color: #eee;
      border: 2px solid var(--color-second);
      border-radius: 5px;
      font-size: 12px;
      

    }

    label {
      position: absolute;
      left: 10px;
      top: 12px;
      transition: all 0.2s ease;
      padding: 0 4px;
      pointer-events: none;
      font-family: var(--font-Oxa);
      color: var(--color-primary);;
 
    
    }
    input:not(:placeholder-shown)~label,
    input:focus~label{
    top: -8px;
    font-size: 13px;   
     background-color: #0d1019;
  
    }

    button{
    background-color: var(--color-primary);
    border: none;
    width: 80%;
    border-radius: 50px;
    padding: 15px;
    cursor: pointer;
    font-family: var(--font-Oxa);
    font-size: 15px;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: var(--color-second);
        color: #fff;
    }
    }



  `,
};

export default styleds;
