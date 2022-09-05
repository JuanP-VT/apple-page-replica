import React from "react";
import { GridContentWrapper } from "./PC.style";

type Props = {};

function PcGridContent({}: Props) {
  return (
    <GridContentWrapper>
      <div className="top">
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/381e915d58d2b9759725c30a9f2c3a0f/razer-blade-15-2022-laptop-500x500.jpg"
          alt="pc"
        />
      </div>
      <div className="bot">
        <div className="title">LAPTOPS</div>
        <div className="description">Sleek high-performance gaming laptops</div>
      </div>
    </GridContentWrapper>
  );
}

export default PcGridContent;
