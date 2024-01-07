# react-native-blur-view

A blur component for iOS,Android and Web(react-native-web)

## ScreenShot

![ScreenShot](https://github.com/dppo/react-native-blur-view/blob/main/screenshot/all.png?raw=true)

## Installation

```sh
yarn add @dppo/react-native-blur-view
```

## iOS

```sh
cd ios && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install && cd ..
```

## Usage

```js
import BlurView from '@dppo/react-native-blur-view';

// ...

<BlurView
  style={{
    width: 100,
    height: 100,
    borderRadius: 30,
    overflow: 'hidden',
  }}
  type="light"
/>;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
