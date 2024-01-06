import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { ViewProps } from 'react-native';
import type { WithDefault } from 'react-native/Libraries/Types/CodegenTypes';

export type BlurType = 'dark' | 'light';

interface NativeProps extends ViewProps {
  type?: WithDefault<BlurType, 'light'>;
}

export default codegenNativeComponent<NativeProps>('BlurView');
