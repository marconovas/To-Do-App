import { useState } from "react"
import TaskForm from "./Components/TaskForm";
import { Card, Container } from "react-bootstrap";
import TaskList from "./Components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);
  
  const addTask = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  }

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container style={{ maxWidth: "500px" }}>
        <Card className="p-4 shadow-sm border-0">
          <h2 className="text-center mb-4">Task Manager</h2>

          <TaskForm addTasks={addTask}/>
        </Card>

        <TaskList tasks={tasks}/>
      </Container>
      
    </div>
  )
}

export default App
