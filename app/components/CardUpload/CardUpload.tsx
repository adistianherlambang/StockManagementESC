import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import { useState } from 'react'

const CardUpload = () => {

    const [radio, setRadio] = useState('')
    const [stock, setStock] = useState()
    const radioItem = ['merah', 'hijau']

    return (
        <View style={styles.container}>
            <View>

            </View>
            <View style={styles.topContainer}>
                <View style={styles.leftSection}>
                    <TextInput style={styles.title} placeholder='Nama Produk' placeholderTextColor='#773FF9'/>
                    <View style={styles.subtitleWrapper}>
                        <Text style={styles.subtitle}>Warna : </Text>
                        <TextInput style={styles.highlight} placeholder='Warna Produk' placeholderTextColor='#773FF9'/>
                    </View>
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
            <View>
                
            </View>
        </View>
    )
}

export default CardUpload