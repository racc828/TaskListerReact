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

  static getTasks() {
    return fetch(path, {
      headers: headers()
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
