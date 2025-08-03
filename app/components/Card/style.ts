import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#773FF9',
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    gap: 4,
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  subtitle: {
    color: 'white',
    fontSize: 12,
  },
  highlight: {
    fontWeight: '700',
  },
  rightSection: {
    gap: 8,
    flexDirection: 'row',
  },
  circleButton: {
    backgroundColor: 'white',
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  circleButtonText: {
    fontWeight: '700',
  },
  quantityText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default styles