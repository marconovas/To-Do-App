

export default function TaskCounter ({ active, finished }) {
    return(
        <div>
            <p>Active Tasks: { active }</p> <br/>
            <p>Finished Tasks: { finished }</p>
        </div>
    )
}