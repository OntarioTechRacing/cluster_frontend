// import {useState} from "react"
import Navbar from "../../components/NavBar/Navbar.jsx";
import "./SimulationComparisons.css";

const SimulationComparisons = () => {
    return (
        <div className="simulationComparisons-layout">
            <div className="navigation-container">
                <Navbar />
            </div>

            <div className="simulationComparisons-body-container">
                { /* ---- Simulation Comparisons Summary ---- */}
                <div className="simulationComparisons-form">
                    <h1>Simulation Comparisons</h1>
                    <div className="table-wrapper">
                        <h1>Select Simulation Cases to Compare</h1>
                    </div>

                    <div className="simulationComparisons-inputs">
                        <form className="simulationComparisons-form">
                            <div className="select-jobs-container">
                            <h2>Select Jobs</h2>
                                <div className="simulation-dropdown">
                                    <label htmlFor="jobs">Select Jobs</label>
                                    <input type="file"/>
                                </div>
                            </div>

                            <h2>Select Cases</h2>
                            <div className="select-cases">
                                <div>
                                    <label >
                                        <input  className="case-label" type="checkbox" name="case1" value="case1"/>Case 1
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input className="case-label" type="checkbox" name="case2" value="case2"/>Case 2
                                    </label>
                                </div>
                            </div>

                            <h2>Visualization Settings</h2>

                            <div className="visualization-settings-container">
                                <label>
                                    <h3>Choose Image Type</h3>
                                        <select>
                                            <option value="png">Png</option>
                                            <option value="jpeg">Jpeg</option>
                                        </select>
                                </label>

                                <label>
                                    <h3>Choose Plot Type</h3>
                                        <select>
                                            <option value="png">Png</option>
                                            <option value="jpeg">Jpeg</option>
                                        </select>
                                </label>
                            </div>
                        </form>
                    </div>

                    <div className="simulationComparisons-button">
                        <button className="comparing-cases-btn">Compare Cases</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimulationComparisons;

