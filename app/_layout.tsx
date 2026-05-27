import { AuthProvider } from "@/contexts/authContext";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const StackLayout = () => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <StackLayout />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
