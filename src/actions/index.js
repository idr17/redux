export function moviesList() {
  return {
    type: 'MOVIES_LIST',
    payload: [
      {id: 1, name: 'Dragon Ball'},
      {id: 2, name: 'Doraemon'},
      {id: 3, name: 'Saint Saiya'}
    ]
  }
}

export function directorsList() {
  return {
    type: 'DIR_LIST',
    payload: [
      {id: 1, name: 'Gosho Aoyama'},
      {id: 2, name: 'Matsushi'}
    ]
  }
}