import { useFonts } from "expo-font";

import Main from "./src/Main";

// import { SQLiteProvider } from "expo-sqlite";
// import { initializeDatabase } from "./src/database/initializeDatabase";

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
    // <SQLiteProvider databaseName="test.db" onInit={initializeDatabase}>
      <Main />
    // </SQLiteProvider>
  );
}
