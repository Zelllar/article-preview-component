export default function SharePopup({ onClose }) {

    return (
        <div className="share-menu">
            <p className="Text-preset3">SHARE</p>
            <div className="icons">
    <a
      href="https://t.me/share/url?url=https://your-site.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClose}
    >
      <img src="/Telegram_Logo.png" alt="Telegram" />
    </a>

    <a
      href="https://vk.com/share.php?url=https://your-site.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClose}
    >
      <img src="/VK_Logo.svg" alt="VKontakte" />
    </a>

    <a
      href="mailto:?subject=Check this out&body=https://your-site.com"
      onClick={onClose}
    >
      <img src="/Email_Logo.png" alt="Email" />
    </a>
            </div>
            <button
            className="share-popup__close"
            onClick={onClose}>
                <img src="icon-share_close.svg"
                alt="close share"/>
            </button>
        </div>
    );
}