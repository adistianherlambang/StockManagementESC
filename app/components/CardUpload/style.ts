import React from 'react'
import { StyleSheet } from 'react-native'

const color = {
  primary: 'white',
  secondary: '#773FF9'
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F5FF',
    borderColor: '#773FF9',
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 16,
    gap: 4
  },
  topContainer: {
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
  radioGroup: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
    flexWrap: 'wrap',
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  radioOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#773FF9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#773FF9',
  },
  radioLabel: {
    color: '#773FF9',
    fontSize: 12,
  },
  submitButton: {
    backgroundColor: '#773FF9',
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: '#773FF9',
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8
  }
});
export default styles