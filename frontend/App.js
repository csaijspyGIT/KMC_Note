import { useFonts } from "expo-font";
import HomeScreenNavigator from "./app/navigators/HomeScreenNavigator";

// import { Provider } from "react-redux";
// import store from "./redux/store/store.js"

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    IcoMoon: require("./assets/icons/icomoon/icomoon.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    // <Provider store={store}>

      <HomeScreenNavigator />
 
    // </Provider>
  );
}


