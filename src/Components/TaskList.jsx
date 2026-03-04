import TaskItem from "./TaskItem"


export default function TaskList ({ tasks, onComplete, onDelete, onEdit }) {
    if(tasks.length === 0){
        return <p className="text-center text-muted">No Tasks yet</p>
    }

    return(
        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <TaskItem 
                        task={task} 
                        onComplete={onComplete} 
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                </div>
            ))}
        </div>
    )
}