import React from "react";
import { PCWrapper } from "./PC.style";
import PcGridContent from "./PcGridContent";
import PCHeader from "./PCHeader";
import PCNav from "./PCNav";

function PC() {
  return (
    <PCWrapper>
      <PCNav />
      <section>
        <PCHeader
          title="LAPTOPS & DESKTOPS"
          content="
        Razer systems are crafted to provide the ultimate performance for gaming
        and work. Enjoy desktop power made mobile with our gaming and
        productivity laptops, or go all-out for your build as you assemble the
        most powerful aRGB Chroma powered battlestation."
        />
        <PcGridContent />
      </section>
    </PCWrapper>
  );
}

export default PC;
