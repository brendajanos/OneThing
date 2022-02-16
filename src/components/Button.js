const Button = (props) => {
  const { title, activeClass = "", primary = false, onClick, type="button" } = props

  return (
    <button className={`btn ${activeClass} ${primary ? "primary" : "secondary"}`} onClick={onClick} type={type}>
      {title}
    </button>
  )
}
export default Button
