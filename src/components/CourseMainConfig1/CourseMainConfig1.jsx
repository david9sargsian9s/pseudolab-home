import './CourseMainConfig1.css'

export const CourseMainConfig1 = (
    { title, answers =[] }
) => {
  return (
    <div className='CourseMainConfig1'>
        <h3>{title}</h3>
        <ol>
            {answers.map((el) => {
                return(
                    <li>{el}</li>
                )
            })}
        </ol>
    </div>
  )
}
