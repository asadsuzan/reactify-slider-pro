
const Card = ({item,theme}) => {

  const isVertical  =  theme === "vertical"
    const verticalStyle ={
        display: isVertical ? "flex":"block",
        alignItems:"center",
        height:isVertical? "300px":"auto"
    }

  return (
      <div  className="card" style={verticalStyle}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-content" >
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <div className="overlay"></div>
            </div>
  )
}

export default Card