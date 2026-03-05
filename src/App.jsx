import { useEffect, useState } from "react"
import TaskForm from "./Components/TaskForm";
import { Button, Card, Container, Form, FormControl, Modal, ModalTitle } from "react-bootstrap";
import TaskList from "./Components/TaskList";
import FilterBar from "./Components/FilterBar";
import TaskCounter from "./Components/TaskCounter";
import ClearButton from "./Components/ClearButton";
import SearchBar from "./Components/SearchBar";
import Sort from "./Components/Sort";
import { arrayMove } from "@dnd-kit/sortable";

function App() {

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  ///EDITING
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");
  const [editPriority, setEditPriority] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  //TASK COUNTERS
  const active = tasks.filter(task => !task.completed);
  const finished = tasks.filter(task => task.completed);
  const totalTasks = active.length + finished.length;

  //SEARCHING
  const [searchTask, setSearchTask] = useState("");

  //TASK PRIORITY
  const [sortOrder, setSortOrder] = useState("none");

  const dragEnabled =  //ENABLE DRAG N DROP IF ALL FILTERS ARE DISABLED
    statusFilter === "all" &&
    priorityFilter === "all" &&
    searchTask == "" &&
    sortOrder === "none";

  const priorityOrder = {
    high: 3,
    medium: 2,
    low: 1,
    none: 0
  };

  //FILTERS
  const filteredTasks = 
    [...tasks]
    .filter(task => {
      if (statusFilter === "active") return !task.completed;
      if(statusFilter === "completed") return task.completed;
      return true;
    })
    .filter(task => {
      if(priorityFilter === "all") return true;
      return task.priority === priorityFilter;
    })
    .filter(task => { //SEARCH TASK
      return task.text
      .toLowerCase()
      .includes(searchTask.trim().toLowerCase());
    })
    .sort((a, b) => {  //SORT TASKS
      if(sortOrder === "high")
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      if(sortOrder === "low")
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      return 0;
    })

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

  //CONFIRM DELETE
  const confirmDelete = (id) => {
    setTaskToDelete(id);
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

  const clearFinishedTasks = () => {
    const confirm = window.confirm("Delete all finished Tasks?");
    if(!confirm) return;

    setTasks(tasks.filter(task => !task.completed));
  }

  //DRAG AND DROP
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if(active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      })
    }
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <Container style={{ maxWidth: "500px" }}>
        <Card className="p-4 shadow-sm border-0">

          <h2 className="text-center mb-4">Task Manager</h2>

          <SearchBar searchTask={searchTask} setSearchTask={setSearchTask} />

          {searchTask && 
            <Button 
              variant="primary"
              onClick={() => setSearchTask("")}
            >
              Remove Search
            </Button>}

          <TaskForm addTasks={addTask}/>
          
          <FilterBar setFilter={setStatusFilter} setPriorityFilter={setPriorityFilter}/>

          <TaskCounter active={active.length} finished={finished.length} total={totalTasks}/>

          {finished.length > 0 && (
            <ClearButton clearTasks={clearFinishedTasks}/>
          )}

          <Sort setSort={setSortOrder}/>

          {!dragEnabled && (
            <small className="text-center text-muted mb-2">
              Drag & Drop disabled while filters or sorting are active
            </small>
          )}

          <TaskList 
              tasks={filteredTasks} 
              onComplete={completeTask} 
              onDelete={confirmDelete}
              onEdit={handleEdit}
              handleDragEnd={handleDragEnd}
              dragEnabled={dragEnabled}
          />

          {/* CONFIRM DELETE MODAL */}
          <Modal
            show={taskToDelete !== null}
            onHide={() => setTaskToDelete(null)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Are you sure that you want to delete this task?
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="success"
                onClick={() => {
                  deleteTask(taskToDelete);
                  setTaskToDelete(null);
                }}>
                Yes
              </Button>

              <Button
                variant="danger"
                onClick={() => setTaskToDelete(null)}
              >
                No
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal 
            show={editingTask !== null}
            onHide={() => setEditingTask(null)}
          >
            <Modal.Header closeButton>
              <ModalTitle>Edit Task</ModalTitle>
            </Modal.Header>

            <Modal.Body>
              <h2>Task description:</h2>
              <FormControl type="text" placeholder={editText} value={editText} onChange={e => setEditText(e.target.value)}/>
              <h2>Task Priority:</h2>
              <Form.Select 
                className="mt-2 mb-2"
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
              >
                <option value="none">Select priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Form.Select>
            </Modal.Body>
                  
            <Modal.Footer>
              <Button 
                variant="primary" 
                onClick={() => {
                  setTasks(prev => 
                    prev.map(task => 
                      task.id === editingTask.id
                      ? { ...task, text: editText, priority: editPriority }
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
