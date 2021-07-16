import { ProfileRelationsBoxWrapper } from './ProfileRelations';

export default function ProfileRelationsBox(propriedades) {

  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {propriedades.items.slice(1,7).map(({login, id}) => {
          return (
            <li key={id}>
              <a href={`/seguidores/${login}`} key={login}>
                <img src={`https://github.com/${login}.png`} />
                <span>{login}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}
