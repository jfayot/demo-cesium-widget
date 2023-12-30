import React from "react";
import { CesiumWidget, Ion } from "@cesium/engine";
import "@cesium/engine/Source/Widget/CesiumWidget.css";

declare global {
  interface Window {
    CESIUM_BASE_URL: string;
  }
}

window.CESIUM_BASE_URL = import.meta.env.PROD
  ? "/cesium/"
  : "/node_modules/@cesium/engine/Build/";

Ion.defaultAccessToken = "YOUR_OWN_TOKEN";

const App: React.FC = () => {
  const viewerRef = React.useRef<HTMLDivElement>(null);
  const [viewer, setViewer] = React.useState<CesiumWidget | null>(null);

  React.useEffect(() => {
    if (viewerRef.current && !viewer) {
      setViewer(new CesiumWidget(viewerRef.current));
    }

    return () => {
      viewer?.destroy();
      setViewer(null);
    };
  }, [viewerRef]);

  return <div style={{ width: "100%", height: "100%" }} ref={viewerRef} />;
};

export default App;
