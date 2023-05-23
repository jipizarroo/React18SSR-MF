import React from 'react';
import ErrorBoundary from "./ErrorBoundary.jsx";

const Image = React.lazy(() => import('remote2/Image') as Promise<{ default: React.FC }>);

export interface ContentProps {
  content?: string;
}

const Content: React.FC<ContentProps> = (props: ContentProps) => {
  return (
    <div style={{ padding: '1rem', borderRadius: '0.25rem', border: '4px dashed #228b22' }}>
      <h2>Remote 1: Content</h2>
      <p>
        This is the content from remote1, which will include an image component exposed by remote2.
        This demonstrates nested federated modules being rendered server-side.
      </p>
      <p>Dynamic content: {props.content || 'Default text'}</p>
      <ErrorBoundary>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Image />
      </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Content;
