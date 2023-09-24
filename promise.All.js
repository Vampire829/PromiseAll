const url='https://jsonplaceholder.typicode.com/users';
const todoId =[5,6,2,1]
const createElemnt =(text)=>{
    const createLi = document.createElement('li');
    const createA = document.createElement('a');
    createA.href = '#';
    createA.textContent=text;
    createLi.append(createA);
    return createLi
}
const dataContainer = document.querySelector('#data__container')
const getTodoIds = (ids)=>{
    const reqect = ids.map((id)=>fetch(`${url}/${id}`));
    Promise.all(reqect)
           .then((respons)=>{
            const dataResult = respons.map((res)=>res.json())
             return Promise.all(dataResult)
           })
           .then((todos)=>{
              console.log(todos)
              todos.forEach((todo)=>{
                const todoHtml = createElemnt(todo.name)
                dataContainer.append(todoHtml)
              })
           })
           .catch((erorr)=>{
            console.log(erorr)
           })
}

getTodoIds(todoId)
