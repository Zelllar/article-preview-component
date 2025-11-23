export default function ImageBlock() {
    return (
        <div className="card__image-wrapper">
            <picture>
                <source
                media="(min-width: 768px)" 
                srcSet="/image-header-desktop.jpg"
                alt="Furniture photo"
                />
                <img
                className="card-image"
                src="/image-header-mobile.jpg" 
                alt="Furniture photo"  
                />
            </picture>
        </div>
    );
}