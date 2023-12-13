import React from "react";
import { PostsConsumer } from "../context";

function initServiceContext(Wrapper: React.ComponentType<any>) {
  return function fn(props: any) {
    return (
      <PostsConsumer>
        {(servicePosts: any) => {
          return <Wrapper {...props} servicePosts={servicePosts} />;
        }}
      </PostsConsumer>
    );
  };
}

export default initServiceContext;
