// import {useState} from "react"
import "./ForceResults.css"
import Navbar from "../../components/NavBar/Navbar.jsx"; // Ensure this path is correct
import Calendar from "../../assets/calendar.png";
import Clock from "../../assets/clock.png";
import Folder from "../../assets/folder.png";

const ForceResults = () => {

    /* Define Backend States */
    // const [dragForce, setDragForce] = useState(0)
    // const [liftForce, setLiftForce] = useState(0)
    // const [axialForce, setAxialForce]= useState(0)

    return(
    <div className="forceResults-layout">
        <div>
            <Navbar />
        </div>

        <div className="forceResults-body-container">

        { /* ---- Top Navigation ---- */}

        <div className="top-navigation-container">
            <div className="top-nav-links-container">
                <h2 className="nav-item">
                    {/* <link to="/">Simulation Runs</link> */}
                    Simulation Runs
                </h2>
                <h2 className="nav-item">
                    {/* <link to="/">Simulation Comparisons</link> */}
                    Simulation Comparisons
                    </h2>
            </div>

            { /* ---- Link to Profile Button ---- */}

            <div className="profile-container">
                <button className="profile-btn">Profile</button>
            </div>
        </div>

        { /* ---- Job Context Section ---- */}
        <h1>JOB CONTEXT</h1>
        <div className="force-results-container">
            <div className="job-context">
                
                <div className="job-context-container">
                    <div className="job-context-icon">
                        <img src={Folder} alt="Folder Icon" width="30px"/>
                    </div>
                    <h2>Job Name</h2>
                    <h3>Rear wing</h3>
                </div>

                <div className="job-context-container">
                    <div className="job-context-icon">
                        <img src={Calendar} alt="Calendar Icon" width="30px"/>
                    </div>

                    <h2>Date run</h2>
                    <h3>June 20, 2025 </h3>
                </div>

                <div className="job-context-container">
                    <div className="job-context-icon">
                        <img src={Clock} alt="Clock Icon" width="30px"/>
                    </div>

                    <h2>Stimulation Run Time</h2>
                    <h3>8 hours, 16 mins</h3>
                </div>

            </div>
        </div>

        { /* ---- Simulation Output Summary ---- */}
        <div className="forceResults-table">
            <h1>STIMULATION OUTPUT SUMMARY</h1>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr className="table-headings">
                            <th>RUN DATA</th>
                            <th>VALUE</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr>
                        <td>Coefficient of Pressure</td>
                        <td>0.52 (avg), 0.91 (max)</td>
                    </tr>
                    <tr>
                        <td>Coefficient of Total Pressure (Ctp)</td>
                        <td>1.14 max</td>
                    </tr>
                    <tr>
                        <td>Velocity</td>
                        <td>Avg: 35.2 m/s, Max: 61.8 m/s</td>
                    </tr>
                    <tr>
                        <td>Wall shear stress</td>
                        <td>Avg: 8.6 Pa, Max: 14.3 Pa</td>
                    </tr>
                    <tr>
                        <td>Iso Surfaces</td>
                        <td>3 created – velocity 20/40/60 m/s</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

        { /* ---- Simulation Output Summary ---- */}
            <div className="forceResults-table">
                <h1>STIMULATION HEALTH SUMMARY</h1>
                    <div className="table-wrapper">

                    <table className="table">
                        <thead>
                            <tr className="table-headings">
                                <th>RUN DATA</th>
                                <th>VALUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Final Residual (U)</td>
                                <td>0.52 (avg), 0.91 (max)</td>
                            </tr>
                            <tr>
                                <td>Final Residual (P)</td>
                                <td>2.4e-5</td>
                            </tr>
                            <tr>
                                <td>Time Steps</td>
                                <td>9.2e6</td>
                            </tr>
                            <tr>
                                <td>Run Steps</td>
                                <td>Completed</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ForceResults;