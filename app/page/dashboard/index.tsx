import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import Card from "@/app/components/Card/Card";
import CardUpload from "@/app/components/CardUpload/CardUpload";
import { Link, useRouter } from "expo-router";
import { logout } from "@/app/utils/auth";

export default function Dashboard() {
  const router = useRouter()

  const [click, setClick] = useState(false)
  const [search, setSearch] = useState('')
  const [tambah, setTambah] = useState(false)

  const handleLogout = async () => {
    logout()
    router.replace('/')
  }
  
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
          <TouchableOpacity style={styles.buttonUser} onPress={handleLogout}>
            <Text style={styles.buttonTextUser}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={{gap:24}}>
          <View style={styles.centeredFlex}>
            <Text style={{fontSize: 24, fontWeight: 500}}>Stok Barang</Text>
            <TouchableOpacity style={styles.buttonStok}>
              <Text style={{color: 'white', fontWeight: 700}}>Tambah Stok</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchInput}>
            <TextInput value={search} onChangeText={setSearch} style={{color: '#B6B6B6'}} placeholder="Cari Stok" placeholderTextColor='#B6B6B6'/>
          </View>
          <View style={{gap: 8}}>
            <CardUpload/>
            <Card/>
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
    borderColor: '#DA0909',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100
  },
  buttonTextUser: {
    fontWeight: 700
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