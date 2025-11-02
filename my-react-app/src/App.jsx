// import Header from "./Header";
// import Footer from "./Footer";
// import Food from "./Food";
// function App(){
//   return(
//       <>
//       <Header></Header>
//       <Food></Food>
//       <Footer></Footer>
//       </>
//   );
// }
// export default App

// ---------------------Card Component---------------------
// import Card from "./Card.jsx";
// function App(){
//     return(
//       <>
//         <Card></Card>
//         <Card></Card>
//         <Card/>
//         <Card/>

//       </>
//     );
// }
// export default App

// --------------------CSS in React--------------------------
// import Button from './Button.jsx'
// function App(){
//   return(
//     <Button></Button>
//   );
// }
// export default App

// -----------------Props--------------
// import Student from './Student-PropTypes.jsx'
// function App(){
//   return(
//     <>
//     <Student name="SpongeBob" age={29} isStudent={true}/>
//     <Student name="Patrick" age={35} isStudent={false}/>
//     <Student name="Squidward" age={50} isStudent={false}/>
//     <Student name="Sandy" age={49} isStudent={true}/>
//     <Student name="Larry"/>
//     <Student />
//     </>
//   );
// }
// export default App

// ---------------Conditional Render-----------------
// import UserGreeting from "./Conditional-Render.jsx"
// function App(){
//   return(
//     <>
//     <UserGreeting> isLoggedIn={true} username="Kane"</UserGreeting>
//     </>
//   );
// }
// export default App

// ------------------List--------------
// import List from './List.jsx'
// function App(){
//    const fruits=[{id:1, name:"Apple", calories:95},
//                  {id:2, name:"Orange", calories:45},
//                  {id:3, name:"Banana", calories:105},
//                  {id:4, name:"Cocount", calories:159},
//                  {id:5, name:"Pineapple", calories:37}]

//    const vegetables=[{id:6, name:"Potatoes", calories:95},
//                      {id:7, name:"Celary", calories:45},
//                      {id:8, name:"Carrots", calories:105},
//                      {id:9, name:"Corn", calories:159},
//                      {id:10, name:"Broccoli", calories:37}]

//     // fruits.sort((a, b) => a.name.localeCompare(b.name)); Alphabetical
//     // fruits.sort((a, b) => b.name.localeCompare(a.name)); Reverse alphabetical
//     // fruits.sort((a, b) => a.calories - b.calories); Numeric
//     // fruits.sort((a, b) =>b.calories - a.calories); Reverse numeric
    
//   return(
//     <>
//     {fruits.length>0 && <List items={fruits} category="Fruits"/>}
//     {vegetables.length >0 && <List items={vegetables} category="Vegetables"/>}
//     </>);    

// ---------------------Button events---------------------
// import ButtonEvent from "./ButtonEvent.jsx";
// import Profilepicture from "./Profilepicture.jsx";
// function App(){
//     return(
//         <>
//             <ButtonEvent/>
//             <Profilepicture/>
//         </>
//     );


//-----------------------useState Hook-----------------------
// import UseState from './UseState.jsx'
// import Counter from './Counter.jsx'
// function App(){
//     return(
//         <>
//             {/* <UseState/> */}
//             <Counter/>
//         </>
//     );

//-------------------OnChange Event handler-------------------
// import OnChange from './OnChange.jsx'
// function App(){
//     return(<OnChange/>
//  );

// ----------------------Color picker App-----------------------
// import ColorPicker from './ColorPicker.jsx'
// function App(){
//     return(<>
//     <ColorPicker/>
//     </>);

// --------------------Update-Functions----------------------
// import UpdateFunction from './UpdateFunction'
// function App(){
//     return(<>
//         <UpdateFunction/>
//     </>);

// ------------------------Update useState--------------------------
// import UpdateObject from './UpdateObject.jsx'
// function App(){
//     return(<>
//     <UpdateObject/>
//     </>);

// --------------------Array Update useState----------------------
// import ArrayuseState from './ArrayuseState.jsx'
// function App(){
//     return(<>
//     <ArrayuseState/>
//     </>);

// -----------------Array of Objects useState()--------------------
// import ArrayofObjectsuseState from './ArrayofObjectsuseState.jsx'
// function App(){
//     return(<>
//     <ArrayofObjectsuseState/>
//     </>);

// -----------------To-DO-LIST--------------------------------
// import ToDoList from './ToDoList.jsx';
// function App() {
//   return (<ToDoList />)

// ------------------UseEffect Hook--------------------------
// import ExampleuseEffect from './ExampleuseEffect.jsx';
// import ExampletwouseEffect from './ExampletwouseEffect.jsx';
// function App() {
//   return (<>
//     <ExampleuseEffect/>
//     <ExampletwouseEffect/>
//   </>);

// ----------------UseContext Hook--------------------------
// import ComponentA from './ComponentA.jsx';
// import React from 'react';
// function App() {
//     return(<ComponentA />);

// ----------------useRef Hooks--------------------------
import Myuseref from './Myuseref.jsx';
function App() {
    return(<Myuseref/>);
}
export default App

