import { useState } from "react";
import ContentBlock from "./ContentBlock";
import ImageBlock from "./ImageBlock";

export default function ArticleCard() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="card">
      <ImageBlock />
      <ContentBlock
        isShareOpen={isShareOpen}
        setIsShareOpen={setIsShareOpen}
      />
    </div>
  );
}
