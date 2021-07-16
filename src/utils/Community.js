const token = 'f39f0d4b0c2ebec969ec3c601bfdcf';

export async function Community([setComunidades]) {
  const date = await fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify({"query": `query { 
        allCommunities {
          id 
          title 
          imageUrl 
        } 
      }`}),
    }
  )
  const response = await date.json();
  const comunidades = response.data.allCommunities;
  setComunidades(comunidades);  
}
