const Button = (props) => {
  const { title, activeClass = "", primary = false, onClick } = props

  return (
    <button className={`${activeClass} ${primary ? "primary" : "secondary"}`} onClick={onClick}>
      {title}
    </button>
  )
}
export default Button
