import CardComponent from './components/Cards'
import SliderComponent from './components/slider'
import S from './styled'

export default function LivesPageComponents() {
  return (
    <S.boxContainer>
      <SliderComponent />

      <S.generalContainer>
        <S.gamesContainer >
          <S.titleContainer>
            <h1>Assista as melhores lives</h1>
          </S.titleContainer>
          <CardComponent />
        </S.gamesContainer>
      </S.generalContainer>
    </S.boxContainer>
  )
}
