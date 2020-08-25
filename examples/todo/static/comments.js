import { classes } from "./style.dn.js"

const state = {
    todos: [],
}

const todoList = () => m("",
    m("ul", state.todos.map(todo =>
        m("li", todo.message, m("input", {type: "checkbox", checked: todo.done}))
    ))
)

window.onload = async () => {
    // load todos
    const resp = await m.request({url: "/todos"})
    state.todos = resp.todos
    // mount vdom
    const todoListEl = document.getElementById("todo-list")
    m.mount(todoListEl, {view: todoList})
}