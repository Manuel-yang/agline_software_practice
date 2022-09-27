fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
 .then(json => {
   const result = json.reduce((prev, cur) => {
    if (cur.completed === true) {
      if (prev[cur.userId] != null) {
        prev[cur.userId]++
      }
      else prev[cur.userId] = 1
    }

    return prev
  }, {})
   console.log(result)
   })
  .catch(function(err) { 
    console.log(err);
  });