import React from "react";
import { CesiumWidget } from "@cesium/engine";

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
