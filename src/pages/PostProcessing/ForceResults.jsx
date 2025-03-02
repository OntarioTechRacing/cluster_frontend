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

    const [dragForce, setDragForce] = useState(0)
    const [liftForce, setLiftForce] = useState(0)
    const [axialForce, setAxialForce]= useState(0)
    return(
        <div className="forceResults-layout">
            <Navbar />

            {/* <div className="headerLinks">
                <ul className="headerLinks-list">
                    <li>
                    <a href="./">Home</a>
                    </li>
                    <li>
                    <a href="./">Simulation Runs</a>
                    </li>
                    <li>
                    <a href="#">Force Results</a>
                    </li>
                    <li>
                    <a href="./">Simulation Comparisons</a>
                    </li>
                </ul>
                <hr className="hr-element" />
            </div> */}

            <div className="force-results-content">
                <h1>Force Results Parameter</h1>
                <h3>Drag Force {dragForce}</h3>
                <h3>Lift Force {liftForce}</h3>
                <h3>Axial Force {axialForce}</h3>
            </div>

            <div className="row">
                <div className="force-results-layout">
                    <h1>Force Results</h1>
                    <div className="force-results-container">
                        <h4>Time</h4>
                        <h4>Drag Force</h4>
                        <h4>Lift Force</h4>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default ForceResults;