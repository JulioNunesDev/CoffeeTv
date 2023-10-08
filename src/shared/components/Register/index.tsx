import S from './styled'

export default function RegisterComponent() {
  return (
     <S.boxContainer>
        <h2>Register</h2>
        <S.content>
            <input type="text" required name='input' placeholder=" "/>
            <label htmlFor="input">Nome</label>
        </S.content>
        <S.content>
            <input type="text" required  name='input' placeholder=" "/>
            <label htmlFor="input">SobreNome</label>
        </S.content>
        <S.content>
            <input type="email" required  name='input' placeholder=" "/>
            <label htmlFor="input">Email</label>
        </S.content>
        <S.content>
            <input type="url" required  name='input' placeholder=" "/>
            <label htmlFor="input">Url Canal</label>
        </S.content>
        <S.content>
            <button>Enviar</button>
        </S.content>
     </S.boxContainer>
    )
}
