// import { useState } from "react";

// const Home = () => {

//     // state
//     const [count, setCount] = useState(0);
//     const [open, setOpen] = useState(false);

//     function handleOne() {
//         setCount(1);
//     }
//     function handleTwo() {
//         console.log(open);
//     }

//     return (
//         <div className="home-page">
//             <h1> { count } </h1>
//             <button onClick={ handleOne }>click</button>
//             <button onClick={ handleTwo }>click</button>
//             {/* <h1> { count } </h1> */}
//         </div>   
//     )
// };


// export default Home;

/*
import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function Home() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];
*/

import { useState } from 'react';

export default function Home() {
  const counter = <Counter />;
  return (
    <div>
      {counter}
      {counter}
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}
