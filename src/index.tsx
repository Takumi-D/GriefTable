import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/app";
import store from "./store";
import ErrorBoundary from "./components/error-boundary";
import { PostsProvider } from "./components/context";
import ServicePosts from "./services/service-posts";

const servicePosts = new ServicePosts();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BrowserRouter>
        <PostsProvider value={servicePosts}>
          <App />
        </PostsProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </Provider>,
);
