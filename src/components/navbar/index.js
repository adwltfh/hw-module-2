import './style.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppNavBar = ({children}) => {
    return (
        <section className="nav">
            <div className="nav-container">
                <div className="nav-logo">
                    <h2>Dawtify</h2>
                    {/* <span><FontAwesomeIcon icon="fa-brands fa-spotify" /></span> */}
                </div>
                <nav>
                    {children}
                </nav>
            </div>
        </section>
    )
}

export default AppNavBar;