const path = 'http://localhost:3000/api/v1/tasks'
export default class ListsAdapter {

  static makeTask(task) {
  
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(task)
    })
    .then( resp => resp.json())
  }

  static getTasks(listId) {
    return fetch(path, {
      headers: headers()
    })
      .then( resp => resp.json())
      .then( tasks => {
        return tasks.filter((t) => t.list_id === listId)
      })
    }
  }

let headers = () => {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}
