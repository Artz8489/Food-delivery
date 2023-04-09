import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'

export default function Categories() {
  return (
    <ScrollView 
    contentContainerStyle={{
      paddingHorizontal:15,
      paddingTop:10
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >

      <CategoriesCard title='Card1' imgUrl='https://links.papareact.com/wru'/>
      <CategoriesCard title='Card2' imgUrl='https://links.papareact.com/wru'/>
      <CategoriesCard title='Card3' imgUrl='https://links.papareact.com/wru'/>
      <CategoriesCard title='Card4' imgUrl='https://links.papareact.com/wru'/>
      <CategoriesCard title='Card5' imgUrl='https://links.papareact.com/wru'/>
      <CategoriesCard title='Card6' imgUrl='https://links.papareact.com/wru'/>
    </ScrollView>
  )
}