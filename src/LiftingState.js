
function LiftingState(props) {
    const data = "alok kumar"; // data to send to parent

    return(
        <>
            <h2>userName: </h2>
            {/* <button onClick={props.alert}>Click me</button> */}

            {/* sending data from child data to parent component(lifting state up) */}
            <button onClick={()=>props.alert(data)}>Click me</button>
        </>
    )
}

export default LiftingState;