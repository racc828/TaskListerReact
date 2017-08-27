const path = 'http://localhost:3000/api/v1/lists'
export default class ListsAdapter {

  static makeList(listName) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        name: `${listName}`
      })
    })
    .then( resp => resp.json())
  }

  static getLists() {
    return fetch(path, {
      headers: headers()
    })
      .then( resp => resp.json())
    }

  static deleteList(listId, listName) {
    return fetch(`http://localhost:3000/api/v1/lists/${listId}`, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify({
        name: `${listName}`,
        id: `${listId}`
      })
    })
    .then( resp => resp.json())
  }

  }


let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}
