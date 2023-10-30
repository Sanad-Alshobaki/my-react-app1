import React, { useState } from "react";
import "./App.css";
// import Header from "./components/Header";
// import PetCard from "./components/PetCard";

// const pets = [
//   {
//     id: 1,
//     name: "Fezzik",
//     favSnacks: ["Peanut Butter", "Soccer Balls"],
//     isAdopted: false
//   },
//   {
//     id: 2,
//     name: "Lucy",
//     image:
//       "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg",
//     favSnacks: ["Cake", "Bacon"],
//     isAdopted: true
//   },
//   {
//     id: 3,
//     name: "Blaise",
//     image:
//       "https://www.thesprucepets.com/thmb/P8d4QM0bI4rJh1WygZDI8f8kNV4=/1000x1000/smart/filters:no_upscale()/GettyImages-870255568-8639765b08c6441dbe35ed72e2d8fb48.jpg",
//     favSnacks: ["Pigeons", "Grass", "Chicken"],
//     isAdopted: true

//   },
// ];


function App() {
  const [image, setImage] = useState('https://randomfox.ca/images/41.jpg')
  // const image = "https://randomfox.ca/images/41.jpg"
  const [likes, setLikes] = useState(0)
  // const likes = 0

  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        setImage(prevImage => prevImage = image)
        setLikes(prevValue => prevValue * 0)
        console.log(image)
      })
  }



  return (
    <div>
      <h1>🦊 FoxFindr 🦊</h1>
      <div className="buttons">
        <button onClick={handleNewFoxClick}>New 🦊 Please</button>
        <button onClick={() => setLikes((prevValue) => prevValue + 1)}>Likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  )
}


// App for setState
// function App() {
//   const [isOn, setIsOn] = useState(false) // array destructuring
//   // a variable that changes! we want to use state.
//   // let isOn = true

//   function Header({ isOn }) {
//     return <h1>{isOn ? "It's on" : "It's off"}</h1>
//   }
//   function handleIsOnClick() {
//     setIsOn(!isOn)
//   }

//   function handleClick(event) {
//     console.log(event);
//   }

//   function handleChange(event) {
//     console.log(event.target.value)
//   }

//   function handleSubmit(event) {
//     event.preventDefault()
//     console.log('Form Submited!')
//   }
//   return (
//     <div>
//       <h1 onClick={handleClick}>React Events</h1>
//       <button onClick={handleClick}>Click Me</button>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Type something" onChange={handleChange} />
//         <select onChange={handleChange}>
//           <option value="1">One</option>
//           <option value="2">Two</option>
//         </select>
//         <button type="submit" >Submit that form</button>
//       </form>
//       <button onClick={handleIsOnClick}>{isOn ? 'On' : 'off'}</button>
//       <Header isOn={isOn} />
//     </div >
//   )
// }

// App for props and components
// function App() {
//   const petCards = pets.map((pet) => {
//     return (
//       <PetCard
//         name={pet.name}
//         key={pet.id}
//         image={pet.image}
//         favSnacks={pet.favSnacks}
//         isAdopted={pet.isAdopted}
//       />
//     );
//   });

//   return (
//     <div className="App">
//       <Header isLoggedIn={true} />
//       <main>{petCards}</main>
//     </div>
//   );
// }

export default App;
