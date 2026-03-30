import React from 'react';
import { FlatList, View, Text } from 'react-native';
import CartItemCard from './CartItemCard';
export default function CartItems({ items }) {
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CartItemCard item={item} />
        )}
      />
    </View>
  );
}