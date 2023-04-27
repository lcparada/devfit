import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import AppRoutes from "./src/routes/app.routes";
import { ProfileProviver } from "./src/contexts/informationProfile";

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
      <AppRoutes />
    </ProfileProviver>
  );
}
