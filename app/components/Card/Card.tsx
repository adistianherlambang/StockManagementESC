import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import styles from './style'

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>Samsung A16</Text>
        <Text style={styles.subtitle}>
          Warna : <Text style={styles.highlight}>Merah</Text>
        </Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.circleButton}>
          <Text style={styles.circleButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>16</Text>
        <TouchableOpacity style={styles.circleButton}>
          <Text style={styles.circleButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Card