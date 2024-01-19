import { Box } from "@mui/material"
import AddTasks from "../AddTasks";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/Home/HomeSlice";
import TaskDateItem from "../TaskDateItem";

const Home = () => {
    const  tasks = useSelector(getTasks);
    console.log(tasks)
    return(
        <Box component="div">
            <AddTasks/>
            {tasks.map((item,i) => (
                <TaskDateItem key={i} date={item} />
            ))}
        </Box>
    )
}
export default Home;