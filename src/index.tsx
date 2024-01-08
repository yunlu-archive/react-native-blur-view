import React from 'react';
import { View, type ViewProps } from 'react-native';
import NativeBlurView, { type BlurType } from './BlurViewNativeComponent';

export default function BlurView(props: ViewProps & { type?: BlurType }) {
  return (
    <View {...props}>
      <NativeBlurView type={props.type} style={{ flex: 1 }} />
      <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
        {props.children}
      </View>
    </View>
  );
}
