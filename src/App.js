import React, {useState, useEffect} from 'react';

let novoID = 4;

export default function App(){
  /* ### Hook
  useState retorna um vetor com dois índices, sendo o primeiro o
  valor do estado em si
  */ 
  const [repositories, setRepositories] = useState([
    {id: 1, name: 'repo1'},
    {id: 2, name: 'repo2'},
    {id: 3, name: 'repo3'},
    {id: 4, name: 'repo4'},
  ]);


  function handleAddRepository(){
    novoID += 1;
    setRepositories([
      ...repositories, 
      {id: novoID, name: "repo"+novoID}]);
  }

  return (
    <>
      <ul>
        { repositories.map( repo => <li key={repo.id}>{repo.name}</li>)}
      </ul>
      <button onClick={handleAddRepository} >Adicionar Repositório</button>
    </>
  )
}

