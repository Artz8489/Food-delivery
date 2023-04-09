import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurntCard from './RestaurntCard'

const FeaturedRow = (props) => {
  const {id,title,description} = props
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
      <Text className='font-bold text-lg'>{title}</Text>
      <ArrowRightIcon color='#00CCBB'/>
      </View>   
      <Text className='text-xs text-gray-500 px-4'>
        {description}
      </Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15,

      }}
      showsHorizontalScrollIndicator={false}
      className='pt-4'
>
{/* Restuarnt Cards */}
<RestaurntCard
 id='1223'
 imgUrl='https://links.papareact.com/wru'
 title='Artz Hotel'
 rating={4.5}
 genre='Arabic'
 address='East street Salem'
 short_description='Nice cuisisn and take away'
 dishes='Awesome Food'
 long='2.1'
 lat='3'
/>
<RestaurntCard
 id='1223'
 imgUrl='https://links.papareact.com/wru'
 title='Artz Hotel'
 rating={4.5}
 genre='Arabic'
 address='East street Salem'
 short_description='Nice cuisisn and take away'
 dishes='Awesome Food'
 long='2.1'
 lat='3'
/>
<RestaurntCard
 id='1223'
 imgUrl='https://links.papareact.com/wru'
 title='Artz Hotel'
 rating={4.5}
 genre='Arabic'
 address='East street Salem'
 short_description='Nice cuisisn and take away'
 dishes='Awesome Food'
 long='2.1'
 lat='3'
/>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow