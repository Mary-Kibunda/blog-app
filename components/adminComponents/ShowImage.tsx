"use client";
import { ImageData } from "./ProfileSettings";
import { CldImage } from "next-cloudinary";

export default function ShowImage({ url }: ImageData) {
  return (
    <CldImage
      src={url}
      width="500"
      height="500"
      alt="sample"
      crop={{
        type: "auto",
        source: true,
      }}
    />
  );
}
