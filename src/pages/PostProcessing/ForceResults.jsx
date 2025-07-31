import {useState} from "react"
import "./ForceResults.css"
import Navbar from "../../components/NavBar/Navbar.jsx"; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faCircleInfo,
  faCircle,
  faCirclePlay,
  faCircleCheck,
  faPieChart,
} from "@fortawesome/free-solid-svg-icons";

const ForceResults = () => {

    /* Define Backend States */
    const [dragForce, setDragForce] = useState(0)
    const [liftForce, setLiftForce] = useState(0)
    const [axialForce, setAxialForce]= useState(0)
    return(
        <div className="forceResults-layout">
            <Navbar />

           <div>
            <h1>JOB CONTEXT</h1>

            <div>

            </div>
           </div>

            <div className="forceResults-header">
            <h1>STIMULATION OUTPUT SUMMARY</h1>
                <table>
                    <thead>
                        <tr>
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


           <div>
            <h1>STIMULATION HEALTH SUMMARY</h1>
            <div className="stimulationHealthSummaries-table">
                <table>
                    <thead>
                        <tr>
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
    )
}

export default ForceResults;