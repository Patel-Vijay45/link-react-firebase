import "../assets/css/button.css"

const Button =({title,buttonclass,iconClass,onClick }) => {
    return ( 
          <button type="button" className={`btn `+buttonclass} onClick={onClick} >
            <i className={iconClass}></i>{title}
          </button>
    );
  };
export default Button;