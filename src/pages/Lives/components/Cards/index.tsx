import S from './styled'
import freefire from '../../../../assets/card/freefire.svg'
import {Link} from 'react-router-dom'
export default function CardComponent() {
  return (
    <S.boxContaimer>
      <Link to='/livestream'>
      <img src={freefire} alt="" />
        <p>Free fire</p>
      </Link>
       
    </S.boxContaimer>
  )
}
