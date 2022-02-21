

const Button = ({ titleButton, handleClick, clases }) => {
    return <button onClick={handleClick} className={clases}>{titleButton}</button>
};

export default Button;
