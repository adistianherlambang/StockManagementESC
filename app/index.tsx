import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Index() {

  const [click, setClick] = useState(false)
  const [search, setSearch] = useState('')
  const [tambah, setTambah] = useState(false)


  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={styles.container}>
        <View style={styles.centeredFlex}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
            <View style={{backgroundColor: 'black', height: 58, width: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
              <Text style={{color: 'white'}}>U</Text>
            </View>
            <View>
              <Text>Hello, <Text style={{fontWeight: 700}}>User!</Text></Text>
              <Text style={{color: '#B6B6B6'}}>Bismillah</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonUser}>
            <Text style={styles.buttonTextUser}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{gap:24}}>
          <View style={styles.centeredFlex}>
            <Text style={{fontSize: 24, fontWeight: 500}}>Stok Barang</Text>
            <TouchableOpacity style={styles.buttonStok}>
              <Text style={{color: 'white'}}>Tambah Stok</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchInput}>
            <TextInput value={search} onChangeText={setSearch} style={{color: '#B6B6B6'}} placeholder="Cari Stok"/>
          </View>
          <View>

          </View>
          <View style={{backgroundColor: '#773FF9', paddingHorizontal: 16, paddingVertical: 24, borderRadius: 16, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
            <View style={{gap: 4}}>
              <Text style={{color: 'white', fontWeight: 700, fontSize: 16}}>Samsung A16</Text>
              <Text style={{color: 'white', fontSize: 12}}>Warna : <Text style={{fontWeight: 700}}>Merah</Text></Text>
            </View>
            <View style={{gap: 8, flexDirection: 'row'}}>
              <TouchableOpacity style={{backgroundColor: 'white', width: 16, height: 16, alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
                <Text style={{fontWeight: 700}}>-</Text>
              </TouchableOpacity>
              <Text style={{color: 'white', fontSize: 16, fontWeight: 700}}>16</Text>
              <TouchableOpacity style={{backgroundColor: 'white', width: 16, height: 16, alignItems: 'center', justifyContent: 'center', borderRadius: 100}}>
                <Text style={{fontWeight: 700}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create ({
  container: {
    fontSize: 16,
    paddingTop: 80,
    paddingHorizontal: 32,
    height: '100%',
    gap: 32
  },
  centeredFlex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonUser : {
    backgroundColor: '#DA0909',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100
  },
  buttonTextUser: {
    color: 'white'
  },
  buttonStok : {
    backgroundColor: '#773FF9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100
  },
  searchInput: {
    backgroundColor: '#ecececff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})