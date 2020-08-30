import React, { FC, ReactElement } from "react";

export const ServiceCard: FC<{
  reverse?: boolean;
  article: ReactElement;
  image: string;
}> = ({ reverse, article, image }) => {
  return (
    <div className={`o-serviceCard__wrapper ${reverse && "-reverse"}`}>
      <div className="o-serviceCard__container">{article}</div>
      <div
        className="o-serviceCard__container"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
  );
};
