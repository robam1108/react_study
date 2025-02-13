const Button= ({children, text, color="black"})=>{
    // 이벤트 객체
    const onClicButton = (e)=>{
        console.log(e)
        console.log(text)
    }
    return(
        <button
            onClick={onClicButton}
            // onMouseEnter={onClicButton}
            style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    )
};

export default Button;

