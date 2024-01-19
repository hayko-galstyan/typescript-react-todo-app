import { Box , TextField , Typography,Button} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import styles from './style.module.css';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { addTasks } from '../../redux/Home/HomeSlice';

const AddTasks = () => {
    const dispatch = useDispatch();
    const [text,setText] = useState<any>();
    const [d,setDate] = useState<string>('');
    const handleChangeDate = (date: dayjs.Dayjs | null) => {
        if (date) {
            let fullDate = date.format('YYYY-MM-DD')
            setDate(fullDate);
        } else {
            setDate('')
        }
    }
    const addNewTasks = () => {
        const data = {
            id:Date.now(),
            title:text,
            date:d,
            completed:false
        }
        dispatch(addTasks(data));
    }
    return (
        <Box component="div">
            <Typography className={styles.title} variant='h3'>Add Task</Typography>
            <Box component="div" className={styles.addTaskSection}>
                <TextField 
                    id="outlined-basic" 
                    value={text}
                    label="Outlined" 
                    variant="outlined" 
                    required={true}
                    onChange={(e)=>setText(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        onChange={handleChangeDate}
                    />
                </LocalizationProvider>
                <Button 
                    size='large' 
                    className={styles.btn} 
                    variant="outlined"
                    onClick = {()=>addNewTasks()}
                >ADD</Button>
            </Box>
        </Box>
    );
};

export default AddTasks;
