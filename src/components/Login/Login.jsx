
import styles from "./Login/"

const Login = ()=>{
    return(
        <div class="login-form-container">
            <h1>Create account</h1>
            <form>
                <input type="email" placeholder="Enter your email"></input>
                <input type="text" placeholder="Enter your password"></input>
            </form>

            <button>Create account</button>
        </div>
    )
}

export default Login