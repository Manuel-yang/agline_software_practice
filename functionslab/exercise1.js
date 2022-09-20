fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
 .then(json => {
   const completed = json.filter((data) => {
    return data.completed == true
  })
   console.log(completed)
   })
  .catch(function(err) { 
    console.log(err);
  });