import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import styles from './style.module.css';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks , changeTaskCompleted , editTaskName , deleteTaskItem} from "../../redux/Home/HomeSlice";
import { useState } from "react";

const Tasks = () => {
    const [text,setText] = useState<string>('');
    const [index,setIndex] = useState<number>(0);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { date } = useParams<{ date ?: string }>();
    const formattedDate = date || "Default Date";
    const tasks = useSelector(getAllTasks);
    const dispatch = useDispatch();

    const handleChange = (index:number) => {
        dispatch(changeTaskCompleted({index}));
    }

    const editText = (index:number,title:any) => {
        setIndex(index);
        setText(title);
    }

    return(
        <>
            <Box component="div" className={styles.header}>
                <Button size="large">
                    <Link to="/"></Link>
                </Button>
                <Typography variant="h4">{date}</Typography>
            </Box>
            <Box component="div" className={styles.taskList}>
                {
                    tasks.filter((item)=>item.date===formattedDate).map((item,i)=>{
                        return(
                            <Box component="div" key={i} className={styles.listItem}>
                                <Box component="div" className={styles.textSection}>
                                    <Checkbox
                                        {...label}
                                        className={styles.checkbox}
                                        onChange={()=>handleChange(i)}
                                    />
                                    <Typography variant="h6" className={item.completed ? styles.completed : '' }>{item.title}</Typography>
                                </Box>
                                <Box component="div" className={styles.buttonSection}>
                                    <Button color="info" onClick={()=>editText(i,item.title)}>Edit</Button>
                                    <Button color="error" onClick={()=>dispatch(deleteTaskItem({index:i}))}>Delete</Button>
                                </Box>
                            </Box>
                        )
                    })
                }
                <Box component="div" className={styles.listItem}>
                    <Box component="div" className={styles.textSection}>
                        <TextField 
                            id="outlined-basic" 
                            value={text}
                            label="Outlined" 
                            variant="outlined" 
                            required={true}
                            onChange={(e)=>setText(e.target.value)}
                        />
                    </Box>
                    <Box component="div" className={styles.buttonSection}>
                        <Button color="warning" onClick={() => dispatch(editTaskName({index,text}))}>Save</Button>
                        <Button color="primary" onClick={()=>setText('')}>Cancel</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default Tasks;