# react-native-blur-view

A blur component for iOS,Android and Web(react-native-web)

## ScreenShot

<div class="image-container">
  <img src="https://github.com/dppo/react-native-blur-view/blob/main/screenshot/ios_light.png?raw=true" alt="iOS_Light">
  <img src="https://github.com/dppo/react-native-blur-view/blob/main/screenshot/android_light.png?raw=true" alt="Android_Light">
  <img src="https://github.com/dppo/react-native-blur-view/blob/main/screenshot/web_light.png?raw=true" alt="Web_Light">
</div>
<div class="image-container">
  <img src="https://github.com/dppo/react-native-blur-view/blob/main/screenshot/ios_dark.png?raw=true" alt="iOS_Dark">
  <img src="https://github.com/dppo/react-native-blur-view/blob/main/screenshot/android_dark.png?raw=true" alt="Android_Dark">
  <img src="https://github.com/dppo/react-native-blur-view/blob/main/screenshot/web_dark.png?raw=true" alt="Web_Dark">
</div>

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

<style>
  .image-container {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .image-container img {
    width: 30%;
    margin-right: 1%;
  }
</style>
