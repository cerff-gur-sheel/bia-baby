import { useFonts } from "expo-font";
import { SQLiteProvider } from "expo-sqlite";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Main from "./src/Main";


export default function App() {
  // const [isFontsLoaded] = useFonts({
  //   "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
  //   "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
  //   "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  // });

  // if (!isFontsLoaded) {
  //   // return null;
  // }

  return (
    <SQLiteProvider databaseName="test.db" onInit={() => console.log("initialize database")}>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </SQLiteProvider>
  );  
}



aaaaa