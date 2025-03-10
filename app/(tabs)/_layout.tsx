import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
        }}
      />

      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Saved"
        options={{
          title: "Saved",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
