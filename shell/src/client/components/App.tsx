import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";

import type { ContentProps } from "remote1/Content";
import ErrorBoundary from "./ErrorBoundary.jsx";
import styles from "./App.module.css";

const Content = React.lazy(
  () =>
    import("remote1/Content") as Promise<{ default: React.FC<ContentProps> }>
);
const Image = React.lazy(() => import("remote2/Image"));

const App = () => {
  const [state, setState] = React.useState<string>("");

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #fc451e",
      }}
    >
      <Helmet>
        <title>SSR MF Example</title>
      </Helmet>

      <div style={{ padding: "1rem" }}>
        <h1 className={styles.test}>
          Module Federation Example: Server Side Rendering
        </h1>

        <h2 style={{ color: "blue" }}>This is the shell application.</h2>

        <p>You can try to disable JavaScript and reload the page.</p>
      </div>

      <div style={{ padding: "1rem" }}>
        <h3>Type something into this input</h3>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Luke, I am your father..."
        />
      </div>
      <Routes>
        <Route
          path="/other"
          element={
            <React.Suspense fallback={<h1>Loading....</h1>}>
              <Content content={state}>
                <div>Veremos si esto funciona</div>
              </Content>
            </React.Suspense>
          }
        />
      </Routes>
      {/* <React.Suspense fallback={<h1>Loading....</h1>}>
        <Content content={state}>
          <div>Veremos si esto funciona</div>
        </Content>
      </React.Suspense>
      <ErrorBoundary>
        <React.Suspense fallback={<h1>Loading....</h1>}>
          <Image />
        </React.Suspense>
      </ErrorBoundary> */}
    </div>
  );
};

export default App;
