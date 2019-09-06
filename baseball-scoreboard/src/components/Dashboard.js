import React from 'react';

const Dashboard = (props) => {
    const { ballCount, strikeCount, setBallCount, setStrikeCount } = props;

    return(
        <div className="dashboard">
            <div className="buttons">
                <button
                    className="ball-button"
                    onClick={() => setBallCount(ballCount + 1)} >
                    Ball
                </button>
                <button
                    className="strike-button"
                    onClick={() => setStrikeCount(strikeCount + 1)} >
                    Strike
                </button>
            </div>
        </div>
    );
};

export default Dashboard;