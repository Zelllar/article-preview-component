export default function ShareButton({onClick, isActive}) {
    const iconSrc = isActive
        ? "/icon-share_close.svg"
        : "/icon-share.svg";
    
    return (
        <button className={`card__share ${isActive ? "active" : ""}`}
        onClick={onClick}
        >
            <img
            className="card__share-icon"
            src={iconSrc}
            alt="Share"
            />
        </button>
    );
}