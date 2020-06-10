const state = [
  {
    id: "todo-0",
    name: "Learn something new!"
  }
];

// How do we show one of those tasks to our user? We want to represent each task as a list item – an HTML <li> element inside of an unordered list element (a <ul>). How do we make it? That could look something like this:
function buildTodoItem(id,name){
const item = document.createElement('li');
const span = document.createElement('span');
const textContent = document.createTextNode(name);

span.appendChild(textContent);

item.id = id;
item.appendChild(span);


return item;
}

function renderTodoList() {
  const frag = document.createDocumentFragment();
state.task.forEach(task => {
  const item = buildTodoItem(task.id, task.name);
  frag.appendChild(item);

});
}
