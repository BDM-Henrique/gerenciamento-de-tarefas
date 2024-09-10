function Tasks(props) {
    return(
        <ul className="space-y-4">
            {props.tasks.map((tasks) => (
                <li key={tasks.id} className="bg-slate-400 text-white p-2 rounded-md">{tasks.title}</li>
        ))}
        </ul>
    );
}

export default Tasks; 