import "./Card.css"

const Card = ({clase,var1,var2,var3,back}) => {
    return (
        <div style={{backgroundColor: back}} className="card" >
            <h4>{clase}</h4>
            <p>{var1}</p>
            <p>{var2}</p>
            <p>{var3}</p>
        </div>
    )
}

export default Card