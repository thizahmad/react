

const BodyColor = ({color, setColor}) => {

  return (
    <>
        <button className={`px-4 py-2 rounded-xl text-white
        ${color === "red" && "bg-red-500"}
        ${color === "green" && "bg-green-500"}
        ${color === "blue" && "bg-blue-500"}
        ${color === "pink" && "bg-pink-500"}`} 
      onClick={() => setColor(color)}>{color}</button>
    </>
  )
}

export default BodyColor
