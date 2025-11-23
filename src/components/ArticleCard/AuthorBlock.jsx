import ShareButton from "./ShareButton";

export default function AuthorBlock() {
  return (
    <div className="card__author-row">
      <div className="card__author">
        <img
          className="card__avatar"
          src="/avatar-michelle.jpg"
          alt="Michelle Appleton"
        />

        <div className="card__author-info">
          <p className="card__name Text-preset2-Bold ">Michelle Appleton</p>
          <p className="card__date Text-preset2-Medium">28 Jun 2020</p>
        </div>
      </div>

      <ShareButton />
    </div>
  );
}
