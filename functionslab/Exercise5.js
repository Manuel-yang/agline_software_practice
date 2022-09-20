fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
 .then(json => {
   const result = json.reduce((prev, cur) => {
    cur.completed === false && prev.push({userId: cur.userId, title: cur.title})
    return prev
  }, [])
   console.log(result)
   })
  .catch(function(err) { 
    console.log(err);
  });