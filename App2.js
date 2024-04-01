import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    return (
    <div className="main">
         <div className="logo">
            <h3>React</h3>
         </div>
         <div className="search-bar">
            <input type="text" placeholder="Search..." />
         </div>
         <div className="user-icon">
            <img src="https://blog.logrocket.com/wp-content/uploads/2021/09/react-native-component-libraries.png"/>
         </div>
     </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading/>);