// 1.
// import { useState, useEffect } from 'react';
// import PresentationComponent from './PresentationComponent';


// const ContainerPresentation = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from an API or other sources
//     // Update the state with the fetched data
//     // Example:
//     fetchData().then((result) => setData(result));
//   }, []);

//   const handleUserAction = () => {
//     // Handle user actions or events
//   };

//   return <PresentationComponent data={data} onUserAction={handleUserAction} />;
// };

// export default ContainerPresentation;


// 2.
import { useState } from "react"

function ContainerPresentation() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <Button onclick={handleIncrement} label="Inc" />
            <ValueComp value={count} />
            <Button onclick={handleDecrement} label="Dec" />
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const Button = ({onclick, label}) => {
    return <button onClick={onclick}>{ label }</button>
}

// eslint-disable-next-line react/prop-types
const ValueComp = ({value}) => {
    return <h1>{ value}</h1>
}
    

export default ContainerPresentation

