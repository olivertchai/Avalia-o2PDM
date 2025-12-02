import { Stack } from "expo-router";
import HomeScreen from "../screens/home/home"
import {
  Card,
  ScreenWrapper,
} from "@/lib/ui";

export default function _screen() {



  return (
    <ScreenWrapper.Scrollable>
      <Stack.Screen options={{ headerShown: true, title: "Home" }} />

      <Card>
        <Card.Header title="Form Card" />

        <HomeScreen/>
      </Card>
    </ScreenWrapper.Scrollable>
  );
}
