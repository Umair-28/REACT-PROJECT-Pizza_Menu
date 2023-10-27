import "../../index.css";

const Footer = (props) => {
    return (
        <footer className="footer">
        {props.isOpen && <p>We are Open Until {props.closeHours}:00</p>}
        
           
        </footer>
    );
    }

export default Footer;