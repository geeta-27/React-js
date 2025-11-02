function Profilepicture(){
    // const imageURL='./src/assets/Profile.jpg';
    // const handleClick=()=>console.log(`OUCH!`);
    // return(<img onClick={handleClick} src={imageURL}></img>
    // );

    const imageURL='./src/assets/Profile.jpg';
    const handleclick=(e)=>e.target.style.display="none";
    return(
        <img onClick={(e)=>handleclick(e)} src={imageURL}></img>
    );
}
export default Profilepicture