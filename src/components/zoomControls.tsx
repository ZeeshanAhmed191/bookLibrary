import { ZoomIn, ZoomOut } from "lucide-react";

interface ZoomProps {
  scale: number;
  zoomIn: () => void;
  zoomOut: () => void;
}

const ZoomControls = ({
  scale,
  zoomIn,
  zoomOut,
}: ZoomProps) => {
  return (
    <div className="flex items-center gap-5">

      <button onClick={zoomOut}>
        <ZoomOut />
      </button>

      <span className="font-semibold">

        {Math.round(scale * 100)}%

      </span>

      <button onClick={zoomIn}>
        <ZoomIn />
      </button>

    </div>
  );
};

export default ZoomControls;