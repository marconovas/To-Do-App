import { useEffect, useState } from "react"
import TaskForm from "./Components/TaskForm";
import { Card, Container } from "react-bootstrap";
import TaskList from "./Components/TaskList";
import FilterBar from "./Components/FilterBar";

function App() {

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  const filteredTasks = 
  filter === "active" ?
    tasks.filter(task => !task.completed) :
  filter === "completed" ?
    tasks.filter(task => task.completed) 
  : tasks;

  const addTask = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  }

  const completeTask = (id) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === id ? 
        {...task, completed: !task.completed} : task
      )
    );
  }

  const deleteTask = (id) => {
    setTasks(prev => 
      prev.filter(task => task.id !== id)
    )
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container style={{ maxWidth: "500px" }}>
        <Card className="p-4 shadow-sm border-0">
          <h2 className="text-center mb-4">Task Manager</h2>


          <TaskForm addTasks={addTask}/>
          
          <FilterBar setFilter={setFilter}/>

          <TaskList tasks={filteredTasks} onComplete={completeTask} onDelete={deleteTask}/>

        </Card>

      </Container>
    </div>
  )
}

export default App
