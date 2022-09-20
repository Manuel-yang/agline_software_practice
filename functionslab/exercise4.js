fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
 .then(json => {
   const number = json.reduce((prev, cur) => {
    return cur.completed == true ? prev + 1 : prev
  }, 0)
   console.log(number)
   })
  .catch(function(err) { 
    console.log(err);
  });