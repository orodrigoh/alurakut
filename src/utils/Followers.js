
export async function Followers([users, setUsers]) {
  
    const date = await fetch('https://api.github.com/users/juunegreiros/followers');
    const user = await date.json();

    setUsers(user)
  

  return [users];
}


