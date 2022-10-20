import React from "react";

function BtnDisplayComponent(props) {
    return (
        <div >
            {(props.status === 0) ?
                <button className="stopwatch-btn stopwatch-btn-gre"
                    onClick={props.start}>start</button>
                : ""
            }
            {(props.status === 1) ?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-red"
                        onClick={props.stop}>Stop</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                        onClick={props.reset}>Reset</button>
                </div>
                : ""
            }
            {(props.status === 2) ?
                <div>
                    <button className="stopwatch-btn stopwatch-btn-gre"
                        onClick={props.resume}>Resume</button>
                    <button className="stopwatch-btn stopwatch-btn-yel"
                        onClick={props.save}>Save</button>
                </div>
                : ""


            }
        </div>
    );
}

export default BtnDisplayComponent;
