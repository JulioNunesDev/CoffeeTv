import S from './styled'

export default function LoginComponent() {
  return (
     <S.boxContainer>
        <h2>Login</h2>
        <S.content>
            <input type="email" required  name='input' placeholder=" "/>
            <label htmlFor="input">Email</label>
        </S.content>
        <S.content>
            <input type="password" required  name='input' placeholder=" "/>
            <label htmlFor="input">Password</label>
        </S.content>
        <S.content>
            <button>Login</button>
        </S.content>
     </S.boxContainer>
    )
}
