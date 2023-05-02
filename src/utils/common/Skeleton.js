import React from "react";

// react skeleton package imports
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonComponent = () => {
  return (
    <div className="last-order">
      <h3>
        <Skeleton />
      </h3>
      <div>
        <p>
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton width={100} />
        </p>
        <p>
          <Skeleton width={150} />
        </p>
        <p>
          <Skeleton width={200} />
        </p>
      </div>
    </div>
  );
};

export default SkeletonComponent;
