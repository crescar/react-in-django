import { useState, } from 'react';
import {  Routes, Route, NavLink } from "react-router";

const GoingToCounter = () => {
    return (
        <>
            <NavLink to="/">Go to Counter</NavLink>
            <br />
            <br />
            <a rel="stylesheet" href="/admin">admin</a>
        </>
    )
}

const CounterElement = () => {
    const [count, setCount] = useState(0)
    return (
        <>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <NavLink to="/going-to-counter">Go to Going to Counter</NavLink>
        <br />
        <br />
        <a rel="stylesheet" href="/admin">admin</a>
        </>
    )
}

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<CounterElement />} />
                <Route path="/going-to-counter" element={<GoingToCounter />} />
            </Routes>
        </>
    )
}