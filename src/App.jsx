import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import TestError from "./Components/TestError";
function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/testErrorBoundary">Test Error boundary</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/testErrorBoundary" element={<TestError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
export default App;
/*
Setup a custom counter hook with increment, decrement, reset, 
setValue functions with a valid UI and Implement a combination 
of states with a useReducer that implements a counter with the 
four evident features in the custom hook -  increment, 
decrement, reset, setValue. Implement a page for the 
custom hook, useReducer, 404, and a page to test error 
boundary and good SEO.

*/
