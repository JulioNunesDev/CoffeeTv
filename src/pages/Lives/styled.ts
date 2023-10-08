import {styled} from 'styled-components'

const Styleds = {
boxContainer: styled.main`
width: 100%;
height: auto;
background-color: color-mix(in srgb, var(--color-second) 10%, #000 );
`,
generalContainer: styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;


`,

gamesContainer: styled.div`
max-width: 1200px;
width: 100%;
height: 700px;
background-color: rgba(0, 0, 0, 0.2);
padding: 10px;
border-radius: 8px;
padding-top: 40px;



`,
titleContainer: styled.div`

border-bottom: 4px solid var(--color-primary);
margin-bottom: 50px;


h1{
color: #fff;
font-weight: 600;
font-size: 45px;
font-family: var(--font-Oxa);

@media screen and (max-width: 470px){
    
        font-size: 30px;
      
    
}

}
`

}


export default Styleds;