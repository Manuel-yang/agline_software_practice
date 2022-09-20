fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json // Complete this code
     const todoTitles = []
     completed.forEach( (todo, index) => {
      todoTitles.push(todo.title)
    })
    console.log(todoTitles)
  })
  .catch(function(err) { 
    console.log(err);
  });