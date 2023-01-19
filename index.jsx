import { hydrateRoot } from 'react-dom/client';
import React from 'react';
import styled from 'styled-components';

function StyleBreaker() {
  // 🚨🚨🚨🚨 Uncomment next line to see the issue 🚨🚨🚨🚨
  // return <h2>Boom</h2>;
  return null
}

const Headline = styled.h1`
  color: fuchsia;
`;

const scriptSrc = document.querySelector('script').attributes.src.value

const App = () => (
  <html lang="en">
    <head>
      <title>Full-Dom Hydration Issue</title>
      <script src={scriptSrc} defer></script>
    </head>
    <body>
      <Headline>Hello</Headline>
      <StyleBreaker />
    </body>
  </html>
);

function hydrate() {
  React.startTransition(() => {
    hydrateRoot(
      document,
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      {}
    );
  });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
