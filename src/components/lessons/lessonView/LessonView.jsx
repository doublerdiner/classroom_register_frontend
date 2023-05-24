import { Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import LessonDescription from "../../home/LessonDescription";
import LessonStudentTable from "./LessonStudentTable";

const LessonView = ({selectedLesson, setSelectedStudent, removeStudent={removeStudent}})=>{
    return(
        <>
            <Grid2 container spacing={2} className="padding2rem">
            <Grid2 xs={3}>
                <LessonDescription currentLesson={selectedLesson}/>
            </Grid2>
            <Grid2 xs={9}>
                <LessonStudentTable 
                pupils={selectedLesson.students}
                setSelectedStudent={setSelectedStudent}
                selectedLesson={selectedLesson}
                removeStudent={removeStudent}/>
            </Grid2>
            </Grid2>
        </>
    )
}
export default LessonView;