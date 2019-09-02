import React from "react";
import uuid from "uuid/v1";

const PersonIndexCounts = ({ indexCounts }) => {
    const arr = indexCounts;

    const letters = [],
        obj = Object.keys(arr);
    for (var key in obj) {
        if (arr[obj[key]] > 0) {
            letters.push(obj[key]);
        }
    }

    return (
        <div className="container">
            <div className="row">
                {letters.map(personIndex => (
                    <div key={uuid()} className="letters-wrapper">
                        <p className="text-black-50">{personIndex}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PersonIndexCounts;
