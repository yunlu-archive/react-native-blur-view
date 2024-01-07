import React from 'react';
import { View, type ViewProps } from 'react-native';
import type { BlurType } from './BlurViewNativeComponent';

export default function BlurView(props: ViewProps & { type?: BlurType }) {
  const { type } = props;
  return (
    <View
      {...props}
      style={[
        props.style,
        {
          // @ts-ignore
          backdropFilter: 'blur(15px)',
          backgroundColor:
            type === 'dark'
              ? 'rgba(16, 12, 12, 0.64)'
              : 'rgba(255, 255, 255, 0.31)',
        },
      ]}
    />
  );
}
