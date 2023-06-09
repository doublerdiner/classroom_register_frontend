import { Button, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material"
import { useState } from "react"

const AddLesson = ({date, addLesson})=>{
    const [lessonForm, setLessonForm] = useState()

    const formChange = (e)=>{
        setLessonForm(e.target.value)
    }

    const submitLesson = (e)=>{
        e.preventDefault()
        const temp = {}
        temp.name = lessonForm
        temp.dayType = e.target[2].value
        temp.period = e.target[4].value
        temp.yearGroup = e.target[6].value
        temp.students = []
        addLesson(temp)
        e.target.reset()
    }

    return(
        <>
        <Paper>
            <Typography className="center" variant="h5" sx={{textDecoration:"underline"}}> Add Lesson</Typography>
            <div className="center">
                <form onSubmit={submitLesson} className="center column gap1rem topPadding1rem bottomPadding3rem">
                    <TextField onChange={formChange} id="description" type="text" label="Description" required></TextField>
                    <div>
                        <InputLabel htmlFor="daySelect">Day: </InputLabel>
                        <Select
                            labelId="daySelect-label"
                            id="daySelect"
                            defaultValue={date.dayName}
                            className="width100"
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value={"Monday"}>Monday</MenuItem>
                            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
                            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
                            <MenuItem value={"Thursday"}>Thursday</MenuItem>
                            <MenuItem value={"Friday"}>Friday</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <InputLabel htmlFor="period">Period: </InputLabel>
                        <Select
                            labelId="periodSelect-label"
                            id="period"
                            defaultValue={1}
                            className="width100"
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <InputLabel htmlFor="yearGroup">Year Group: </InputLabel>
                        <Select
                            labelId="yearGroup-select"
                            id="yearGroup"
                            defaultValue={1}
                            className="width100"
                            inputProps={{ 'aria-label': 'Without label' }}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </Select>
                    </div>
                    <Button type="submit" variant="contained">Add Lesson</Button>

                </form>
            </div>
        </Paper>
        </>
    )
}
export default AddLesson