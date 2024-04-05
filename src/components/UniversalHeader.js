import { useEffect } from 'react'

const loadScript = () => {
  const config = {
    property: 'org',
    language: 'en-us',
    environment: 'dev',
    components: {}
  };

  /* istanbul ignore else */
  if (
    window.adsk &&
    window.adsk.components &&
    window.adsk.components.universalHeader
  ) {
    window.adsk.components.universalHeader.render(
      'uh-header-container',
      config
    );
  }
};
  
const appendScript = () => {
  const script = document.createElement('script');
  script.src = 'https://swc-stg.autodesk.com/web-mfe/universal-header/stage/v1/app.js';
  script.type = 'text/javascript';
  script.onload = () => loadScript();
  document.body.appendChild(script);
};

function UniversalHeader() {
  useEffect(() => {
    appendScript();
  }, []);
  
  return (
      <div id='uh-header-container'></div>
  );
}

export default UniversalHeader;
  