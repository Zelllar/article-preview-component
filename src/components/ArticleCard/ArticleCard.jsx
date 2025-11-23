import AuthorBlock from "./AuthorBlock";
import ContentBlock from "./ContentBlock";
import ImageBlock from "./ImageBlock";

export default function ArticleCard() {
  return (
    <div className="card">
      <ImageBlock />
      <ContentBlock />
    </div>
  );
}
