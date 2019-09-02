import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Bundeslaende from "./components/Bundeslaende";
import PersonIndexCounts from "./components/PersonIndexCounts";
import { BrowserRouter } from "react-router-dom";

const App = () => {
    const [bundeslaende, setBundeslaende] = useState([]);
    const [personIndexCounts, setPersonIndexCounts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBundeslaende = async () => {
            setLoading(true);
            const res = await axios.get("../bundesland.json");
            setBundeslaende(res.data.stateList);
            setPersonIndexCounts(res.data.personIndexCounts);
            setLoading(false);
        };
        fetchBundeslaende();
    }, []);

    return (
        <BrowserRouter>
            <div className="container">
                <h1 className="font-weight-bold">Bundesländer</h1>
                <Bundeslaende bundeslaende={bundeslaende} loading={loading} />
                <PersonIndexCounts indexCounts={personIndexCounts} />
            </div>
        </BrowserRouter>
    );
};

export default App;
