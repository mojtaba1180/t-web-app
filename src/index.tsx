import { useThemeParams } from "@vkruglikov/react-telegram-web-app";import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import ReactDOM from "react-dom/client";

import "./index.css";
import logo from "./logo.svg";

import BackButtonDemo from "./components/BackButtonDemo";
import HapticFeedbackDemo from "./components/HapticFeedbackDemo";
import MainButtonDemo from "./components/MainButtonDemo";
import ScanQrPopupDemo from "./components/ScanQrPopupDemo";
import ShowPopupDemo from "./components/ShowPopupDemo";

const DemoApp = () => {
  const [colorScheme, themeParams] = useThemeParams();

  return (
    <div>
      <ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === "dark"
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
        </header>
        <div className='contentWrapper'>
          <input
            type='file'
            className='changeimage'
            id='changeimage'
            accept='image/*'
          />
          <MainButtonDemo />
          <BackButtonDemo />
          <ShowPopupDemo />
          <HapticFeedbackDemo />

          <ScanQrPopupDemo />
        </div>
      </ConfigProvider>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<DemoApp />);
