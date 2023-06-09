import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import LessonRow from "./LessonRow"

const AllLessons = ({lessons, deleteLesson, setSelectedLesson})=>{

    const lessonList = lessons.map((lesson)=>{
        return(
                <LessonRow key={lesson.id}
                lesson={lesson}
                deleteLesson={deleteLesson}
                setSelectedLesson={setSelectedLesson}/>
        )
    })

    return(
        <>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Period</TableCell>
                        <TableCell>Lesson Name</TableCell>
                        <TableCell>Year Group</TableCell>
                        <TableCell>Class Size</TableCell>
                        <TableCell>View</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lessonList}                    
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}
export default AllLessons