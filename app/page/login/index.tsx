import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { users } from '@/app/data/user';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('userId', user.userId);
      router.replace('/page/dashboard');
    } else {
      Alert.alert('Login gagal', 'Username atau password salah');
    }
  };

  return (
    <View style={{ padding: 20, alignContent: 'center', height: '100%', justifyContent: 'center' }}>
      <TextInput placeholder="Username" onChangeText={setUsername} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}