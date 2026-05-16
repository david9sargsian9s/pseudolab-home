import "./Error.css"

export const Error = ({ errorText }) => {
  return (
    <div className="Error">
        <span>{errorText}</span>
    </div>
  )
}
