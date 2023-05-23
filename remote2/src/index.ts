import('./App').then(
    ({ mount }) => {
      const localRoot = document.getElementById('remote2');

      mount({
        mountPoint: localRoot!,
        routingStrategy: 'browser',
      });
    }
  );

  export {};