/**
 *
 * LeftMenuFooter
 *
 */

import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Powered by&nbsp;
        <a
          key="website"
          href="https://evolve.engineering"
          target="_blank"
          rel="noopener noreferrer"
        >
          Evolve Studio 🚀
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
