import React from "react";
import { PCHeader, PCWrapper } from "./PC.style";
import PCNav from "./PCNav";

function PC() {
  return (
    <PCWrapper>
      <PCNav />
      <section>
        <PCHeader>
          <div className="title">LAPTOPS & DESKTOPS</div>
          <div className="content">
            Razer systems are crafted to provide the ultimate performance for
            gaming and work. Enjoy desktop power made mobile with our gaming and
            productivity laptops, or go all-out for your build as you assemble
            the most powerful aRGB Chroma powered battlestation.
          </div>
        </PCHeader>
      </section>
    </PCWrapper>
  );
}

export default PC;
