import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import { useState } from 'react'

const CardUpload = () => {

    const [radio, setRadio] = useState<string>('')
    const [stock, setStock] = useState<number>(0)
    const radioItem = ['Samsung', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'Tecno', 'Infinix', 'IPhone']

    return (
        <View style={styles.container}>
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
            <View style={styles.radioGroup}>
                {radioItem.map((item) => (
                    <TouchableOpacity
                    key={item}
                    onPress={() => setRadio(item)}
                    style={styles.radioWrapper}
                    >
                    <View style={styles.radioOuter}>
                        {radio === item && <View style={styles.radioInner} />}
                    </View>
                    <Text style={styles.radioLabel}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{gap: 8}}>
                <TouchableOpacity style={styles.submitButton}><Text style={{color: 'white', fontSize: 16}}>Simpan</Text></TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}><Text style={{color: '#773FF9', fontSize: 16}}>Cancel</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default CardUpload