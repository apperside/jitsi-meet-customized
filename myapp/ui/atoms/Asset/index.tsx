import React, { useState, ReactElement, useMemo } from "react";
import { ActivityIndicator } from "react-native";


// import { useAssets, useAsset, useAssetFallback } from './useAssets';
// import { AssetDomain } from './assetTypes';
// import { ThemeColors } from 'styled-system';
// import { ColorKeys } from 'styled-system';
// import { getAssetSource } from "./getAssetSource"
import FastImage, { FastImageProps, Source } from "react-native-fast-image";
import { IconName, icons } from "./icons";
type Props = {
  name?: IconName;
  // align?: boolean;
  // style?: ImageStyle | ImageStyle[];
  // color?: ColorKeys;
  width?: string | number;
  height?: string | number;
  size?: number
  source?: any
  // children?: ReactElement | ReactElement[];
  // resizeMode?: ResizeMode;
  // ItemOnLoading?: React.FC;
  // customColor?: string;
};

const Asset: React.FC<Props & Omit<FastImageProps, "source">> = ({
  name,
  width,
  height,
  size,
  source,
  ...props
}): JSX.Element => {

  const finalSource = useMemo(() => {
    if (name) {
      return icons[name];
    }
    return { uri: source };
  }, [source, name]);
  return (
    <FastImage
      source={finalSource}
      style={[{ width: width || size || 0, height: height || size || 0 }, props.style]}
      resizeMode={props.resizeMode || FastImage.resizeMode.contain}
    >
      {props.children}
      {/* {children ? (
        children
      ) : (
          <ItemOnLoading animating={!isLocalAsset && isLoading} />
        )} */}
    </FastImage >
  );
};

Asset.displayName = "Asset";

export default React.memo(Asset);
