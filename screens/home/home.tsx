import {StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <View style ={{ flex:1,alignItems:"center",justifyContent:"center"}}>
      <Text>Página Inicial</Text>
      <Link
        href={'../../app/about'}
      >
        Ir para Sobre
      </Link>
    </View>
  );
}