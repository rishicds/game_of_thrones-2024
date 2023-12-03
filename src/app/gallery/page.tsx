import { constructMetaData } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetaData({
  title: "Gallery | GOT RCCIIT",
});

const Gallery = () => {
  return <div className="font-got">gallery</div>;
};

export default Gallery;
