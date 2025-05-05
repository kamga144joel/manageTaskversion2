import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.managetasks.app',
  appName: 'ManageTasks',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidSplashOnLightBackground: false,
      androidResizeMode: 'auto',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      spinnerColor: '#999999',
      spinnerImage: '',
      fadeSplashScreenDuration: 300,
      fadeSplashScreen: true,
      androidTheme: '@android:style/Theme.DeviceDefault.NoActionBar',
      androidStatusBarColor: '#ffffff'
    },
    App: {
      background: '#ffffff'
    }
  },
  css: {
    variables: {
      '--ion-background-color': '#ffffff',
      '--ion-text-color': '#000000',
      '--ion-toolbar-background': '#ffffff',
      '--ion-toolbar-color': '#000000'
    }
  }
};

export default config;
