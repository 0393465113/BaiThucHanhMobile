import {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';

export default function App() {

  const[cart, setcart]= useState([])

  const addTocart =(product: any)=>{
    setcart(prev=> [...prev, product])
  }

  const totalItems= cart.length;
  const totalProce= cart.reduce((sum, p)=> sum+ p.price, 0)
  const products =[
    {id: 1, name: 'Máy Tính', price: 500},
    {id: 2, name: 'Điện thoại', price: 1500},
    {id: 3, name: 'Laptop', price: 2500},
    {id: 4, name: 'Tai nghe', price: 3500},
  ];
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Danh sách sản phẩm</Text>
      <FlatList
      data={products}
      keyExtractor={item=> item.id}
      renderItem={({item})=>(
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Pressable onPress={()=> addTocart(item)} style={{borderColor: 'black', borderWidth: 1}}>Thêm vào giỏ</Pressable>
        </View>
      )}
      />

      <View>
        <View>Giỏ hàng</View>

        <Text>Tỏng sản phẩm: {totalItems}</Text>
        <Text>Tổng giá trị sản phẩm: {totalProce}</Text>

        <FlatList
      data={cart}
      keyExtractor={item=> item.id}
      renderItem={({item})=>(
        <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      )}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  

});
