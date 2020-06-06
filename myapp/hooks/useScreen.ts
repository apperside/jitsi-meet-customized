import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
const window = Dimensions.get("window");

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

const getOrientation = (w: number, h: number) => {
  return w < h ? "portrait" : "landscape";
};

export const useScreen = () => {
  const [width, setWidth] = useState(window.width);
  const [height, setHeight] = useState(window.height);
  const [orientation, setOrienttation] = useState(getOrientation(width, height));

  useEffect(() => {
    Dimensions.addEventListener("change", newDimensions => {
      const w = newDimensions.window.width;
      const h = newDimensions.window.height;

      // Retrieve and save new dimensions and orientation
      setWidth(w);
      setHeight(h);
      setOrienttation(getOrientation(w, h));

    });
    return () => {
      Dimensions.removeEventListener("change", () => { });
    };
  });
  return { width, height, orientation, wp, hp };
};
