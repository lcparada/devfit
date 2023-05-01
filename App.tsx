import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import { ProfileProviver } from "./src/contexts/informationProfile";

import MainRoutes from "./src/routes/main.routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ProfileProviver>
      <MainRoutes />
    </ProfileProviver>
  );
}
