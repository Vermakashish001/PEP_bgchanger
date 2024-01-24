import React, { useReducer } from "react";

const initialState = {
  color: "olive"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: state.color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"></div>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
        {}
        {["green", "pink", "gray", "yellow", "blue",].map((btnColor) => (
          <button
            key={btnColor}
            onClick={() => dispatch({ type: "SET_COLOR", payload: btnColor })}
            className="outline-none px-4 py-1 rounded-xl shadow-xl"
            style={{ backgroundColor: btnColor }}
          >
            {btnColor}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

