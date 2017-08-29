const path = 'http://localhost:3000/api/v1/lists'
export default class ListsAdapter {

  static makeList(listName, currentUser) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        name: `${listName}`,
        user_id: `${currentUser.id}`
      })
    })
    .then( resp => resp.json())
  }

  static getLists(currentUser) {
    return fetch(path, {
      headers: headers()
      })
      .then( resp => resp.json())
      .then( lists => {
         return lists.filter((list) => list.user_id == currentUser.id)
      })
    }

  static deleteList(listId, listName, userId, currentUser) {
    debugger
    return fetch(`http://localhost:3000/api/v1/lists/${listId}`, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify({
        name: `${listName}`,
        id: `${listId}`,
        user_id: `${userId}`
      })
    })
    .then( resp => resp.json())
    .then( lists => {
       return lists.filter((list) => list.user_id == currentUser.id)
    })
  }

  static editList(listName, listId, userId) {
    debugger
      return fetch(`http://localhost:3000/api/v1/lists/${listId}`, {
        method: 'PATCH',
        headers:headers(),
        body: JSON.stringify({
          name: `${listName}`,
          user_id: `${userId}`
        })
      })
      .then( resp => resp.json())
    }
  }


let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
}
