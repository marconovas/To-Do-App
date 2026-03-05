import { useEffect, useState } from "react"
import TaskForm from "./Components/TaskForm";
import { Button, Card, Container, FormControl, Modal, ModalFooter, ModalTitle } from "react-bootstrap";
import TaskList from "./Components/TaskList";
import FilterBar from "./Components/FilterBar";
import TaskCounter from "./Components/TaskCounter";

function App() {

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [filter, setFilter] = useState("all");

  ///EDITING
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  //TASK COUNTER
  const active = tasks.filter(task => !task.completed);
  const finished = tasks.filter(task => task.completed);

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

  const handleEdit = (task) => {
    setEditingTask(task);
    setEditText(task.text);
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

          <TaskCounter active={active.length} finished={finished.length}/>

          <TaskList 
              tasks={filteredTasks} 
              onComplete={completeTask} 
              onDelete={deleteTask}
              onEdit={handleEdit}
          />

          <Modal 
            show={editingTask !== null}
            onHide={() => setEditingTask(null)}
          >
            <Modal.Header closeButton>
              <ModalTitle>Edit Task</ModalTitle>
            </Modal.Header>

            <Modal.Body>
              <FormControl type="text" placeholder={editText} value={editText} onChange={e => setEditText(e.target.value)}/>
            </Modal.Body>
                  
            <Modal.Footer>
              <Button 
                variant="primary" 
                onClick={() => {
                  setTasks(prev => 
                    prev.map(task => 
                      task.id === editingTask.id
                      ? { ...task, text: editText }
                      : task
                    )
                  );

                  setEditingTask(null);
                }}
              >
                Finish
              </Button>
            </Modal.Footer>
          </Modal>
        </Card>

      </Container>
    </div>
  )
}

export default App
