import linkIcon from './assets/link.png';
import './PopupContent.css';

function PopupContent({ name, link, subtext, imageURL, coords }) {
    return (
    <>
        <h2 className="popup-heading"> { name }
            <a href={ link } target="_blank" className="link-icon-wrapper">
                <img className="link-icon" src={ linkIcon } />
            </a>
        </h2>
        <p className="subtext"> { subtext } <br/> { coords } </p>
        <img src={ imageURL } className="popup-image" />
    </>
    );
}

export default PopupContent;