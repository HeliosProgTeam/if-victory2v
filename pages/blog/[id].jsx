import React from "react";
import { useRouter } from "next/router";
import { withLayout } from "../../src/layout/Layout";

const BlogEntry = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
      <div className="blog-entry">
      </div>
    );
  };
  
export default withLayout(BlogEntry);