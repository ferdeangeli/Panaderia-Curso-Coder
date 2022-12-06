import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CART } from '../data/cart';

const CartItem =(item, onDelete) => {
  return (
    <View>
        <View>
            <Text>{item.name}</Text>
        </View>
        <View>
            <View>
                <Text>Cantidad: {item.quantity}</Text>
                <Text>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={()=>{onDelete(item.id)}}>
                <Ionicons name='trash' size={24} color={'red'} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})