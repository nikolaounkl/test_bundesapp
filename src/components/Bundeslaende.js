import React from "react";
import uuid from "uuid/v1";
import { Link } from "react-router-dom";

const Bundeslaende = ({ bundeslaende, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="container">
            <div className="row">
                {bundeslaende.map(bundesland => (
                    <div
                        key={uuid()}
                        className="box-wrapper col-lg-4 col-md-6 col-sm-12"
                    >
                        <Link to={bundesland.url}>
                            <div className="box">
                                <h5>{bundesland.name}</h5>
                                <p className="text-black-50">
                                    {bundesland.schoolCount} Schulen
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bundeslaende;
