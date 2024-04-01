import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div" , {id :"main"}, [React.createElement("h1", {id : "h1"}, "Namaste"),
React.createElement("h2", {id : "h2"}, "React"), React.createElement("h3", {id : "h3"}, "❤️")
]);

const withJSX = (
    <div>
        <h1>Namaste</h1>
        <h1>React</h1>
        <h1>❤️</h1>
    </div>
);

const CompositionComponent = () => <h1>Namaste</h1>;

const withFunctionComponent = () => {
    return (
        <div>
            {CompositionComponent()}
         {/* <h1>Namaste</h1> */}
         <h1>React</h1>
         <h1>❤️</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(withFunctionComponent());