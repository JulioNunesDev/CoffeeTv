import { IframeHTMLAttributes } from 'react';


// Define una interfaz que extienda las propiedades estándar de un <iframe> y agregue 'frameBorder'.
interface MyIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  allowfullscreen?: boolean;
}

// Luego, puedes usar MyIframeProps en lugar de IframeHTMLAttributes<HTMLIFrameElement> en tus componentes.

function LiveStream() {

  const iframeProps: MyIframeProps = {
    width:"100%",
    height:"500",
    src:"https://www.youtube.com/embed/6BqGBwr8PCo?si=7w7k1NLMxyNceNgm",
    title:"YouTube video player",
    allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowfullscreen: true
  }
  return (
    <div>
      
      <iframe {...iframeProps}></iframe>
<a href="https://www.instagram.com/julionunesyt/" target="_blank">
      <h1>Julio Nunes</h1>

</a>
    </div>
  );
}

export default LiveStream;
