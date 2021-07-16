import {Followers} from '../src/utils/Followers';
import {Community} from '../src/utils/Community';

import styled from 'styled-components';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { useEffect, useState, useRef } from 'react';


function ProfileSidebar(propriedades) {

  return (

    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {

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


export default function Home() {
  const [users, setUsers] = useState([]);
  const [seguidores, setSeguidores] = useState([]);
  const [comunidades, setComunidades] = useState([]);
  const textInput1 = useRef();
  const textInput2 = useRef();


  useEffect(() => {
    Followers([users, setUsers]);
    Followers([seguidores, setSeguidores])  ;
    Community([setComunidades]);

  }, [])

  const usuarioAleatorio = 'orodrigoh';

  function handlePost(e) {
    e.preventDefault();
    const dadosDoForm = new FormData(e.target);

    const comunidade = {
      title: dadosDoForm.get('title'),
      imageUrl: dadosDoForm.get('image'),
      creatorSlug: usuarioAleatorio,
    }

      fetch('api/comunidades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comunidade),
    })
    const newCom = [comunidade,...comunidades];
    setComunidades(newCom)

    textInput1.current.value = '';
    textInput2.current.value = '';

    textInput1.current.focus();
   
  }


  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio}/>
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet 
            recados={35} 
            fotos={20} 
            videos={1} 
            fas={200} 
            mensagens={100} 

            confiavel={3} 
            legal={1}
            sexy={3}/>
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handlePost}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  ref={textInput1}
                  />
              </div>
              <div>
                <input
                  ref={textInput2}
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>

        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <ProfileRelationsBox title="Seguidores" items={seguidores} />

        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({users.length})
            </h2>

            <ul>
              {users.slice(20,26).map(({login, id}) => {
                return (
                  <li key={id}>
                    <a href={`/users/${login}`} key={login}>
                      <img src={`https://github.com/${login}.png`} />
                      <span>{login}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

