import React from "react";
import { withLayout } from "../../src/layout/Layout";

const ReportPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "400px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="">Report page</div>
    </div>
  );
};

export default withLayout(ReportPage);
