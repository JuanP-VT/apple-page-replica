import React from "react";
import { PCHeaderWrapper } from "./PC.style";

type Props = {
  title: string;
  content: string;
};

function PCHeader({ title, content }: Props) {
  return (
    <PCHeaderWrapper>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </PCHeaderWrapper>
  );
}

export default PCHeader;
