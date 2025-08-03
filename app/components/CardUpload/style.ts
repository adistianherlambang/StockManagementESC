import React from 'react'
import { StyleSheet } from 'react-native'

const color = {
  primary: 'white',
  secondary: '#773FF9'
}

const styles = StyleSheet.create({
  container: {
    gap: 16
  },
  topContainer: {
    backgroundColor: '#F8F5FF',
    borderColor: '#773FF9',
    borderWidth: 1,
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
    color: color.secondary,
    fontWeight: '700',
    fontSize: 16,
  },
  subtitleWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  subtitle: {
    color: color.secondary,
    fontSize: 12,
  },
  highlight: {
    fontWeight: '700',
    fontSize: 12,
    color: '#773FF9'
  },
  rightSection: {
    gap: 8,
    flexDirection: 'row',
  },
  circleButton: {
    backgroundColor: color.secondary,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  circleButtonText: {
    fontWeight: '700',
    color: color.primary
  },
  quantityText: {
    color: color.secondary,
    fontSize: 16,
    fontWeight: '700',
  },
});
export default styles