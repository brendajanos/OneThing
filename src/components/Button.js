
const Button = (props) => {

  const {title,activeClass="",  primary=false, _callback} = props;

  return (
      <button className={`${activeClass} ${primary ? "primary" : "secondary"}`} onClick={_callback} >{title}</button>
    )
}
export default Button