import React, { useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageWithBoundingBox: React.FC = () => {
  const [crop, setCrop] = useState<Crop>({ unit: "px", width: 50 });
  const [image, setImage] = useState<string>("/path/to/your/initial-image.jpg");
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const onImageLoaded = (image: HTMLImageElement) => {
    // Perform any initial setup or calculations here
  };

  const onCropChange = (newCrop: Crop) => {
    setCrop(newCrop);
    setCoordinates({ x: newCrop.x || 0, y: newCrop.y || 0 });
  };

  return (
    <div>
      <ReactCrop
        src={image}
        crop={crop as any}
        onImageLoaded={onImageLoaded}
        onChange={onCropChange}
      />
      <p>Coordinates: {`x: ${coordinates.x}, y: ${coordinates.y}`}</p>
    </div>
  );
};

export default ImageWithBoundingBox;
