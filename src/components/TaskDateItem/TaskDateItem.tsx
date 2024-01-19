import {Link} from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import styles from './style.module.css';

interface TaskDateItemProps {
    date:string,
    key:number
}

const TaskDateItem:React.FC<TaskDateItemProps> = (props)=> {
    return (
        <Box component="div" key={props.key} className={styles.item}>
            <Typography variant='h4'>{props.date}</Typography>
            <Link to={`/tasks/${props.date}`}>see</Link>
        </Box>
    )
}

export default TaskDateItem;