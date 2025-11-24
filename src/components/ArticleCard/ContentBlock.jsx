import ShareButton from "./ShareButton";
import SharePopup from "./SharePopup";
import AuthorBlock from "./AuthorBlock";

export default function ContentBlock ({ isShareOpen, setIsShareOpen }) {
    const toggleShare = () => setIsShareOpen(prev => !prev);
    const closeShare = () => setIsShareOpen(false);

    return (
        <div className="card__content">
            <div className="card__text-group">
                <h2 className="card__title Text-preset1-Bold">
                    Shift the overall look and feel by adding these wonderful touches to furniture in your home
                </h2>

                <p className="card__description Text-preset2-Medium">
                    Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
                </p>
            </div>
            <div className="card__author-row"
                onClick={(e) => e.stopPropagation()}
            >
                <AuthorBlock />
                <ShareButton onClick={toggleShare} isActive={isShareOpen} />
            </div>
            {isShareOpen && <SharePopup onClose={closeShare}/>}
        </div>
    );
}