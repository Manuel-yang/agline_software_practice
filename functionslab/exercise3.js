fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    let uncompleted = []
    const finalResult = json.filter((data) => {
      return data.completed == false
    })
    .map((data) => {
      uncompleted.push({userId: data.userId, title: data.title})
    })
    console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });