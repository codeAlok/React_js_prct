// *** React fragments ***
// basically we have to use <>  </> ,instead of using extra <div></div> to add more than one component or element in return/ render method.



// you can chooose to write any from prop/props 
function ReuseComp(props) {
    return(
        <div>
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <span>{props.data.contact}</span>
        </div>
    )
}

export default ReuseComp;