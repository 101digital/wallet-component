import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import {
  AccountLimitsComponentProps, CryptoLimitItem, FiatLimitItem
} from './types';
import useMergeStyles from './styles';
import { ProcessBar } from 'react-native-theme-component';
import { PDAXIcon } from '../../assets/PDAX.icon';

const fiatDummyData: FiatLimitItem[] = [
  {title: 'Daily', limit: 100000, remain: 50000},
  {title: 'Monthly', limit: 2000000, remain: 1950000},
  {title: 'Annual', limit: 20000000, remain: 19950000},
];

const cryptoDummyData: CryptoLimitItem[] = [
  {name: 'Axie Infinity', symbol: 'AXS', imageUrl: '', limit: 250, remain: 250},
  {name: 'Bitcoin', symbol: 'BTC', imageUrl: '', limit: 0.3, remain: 0.15},
  {name: 'Cardano', symbol: 'ADA', imageUrl: '', limit: 10000, remain: 10000},
  {name: 'Ethereum', symbol: 'ETH', imageUrl: '', limit: 10, remain: 0},
  {name: 'Smooth Love Potion', symbol: 'SLP', imageUrl: '', limit: 1000000, remain: 1000000},
  {name: 'Avalanche', symbol: 'AVAX', imageUrl: '', limit:150, remain:150},
  {name: 'USD Coin', symbol: 'USDC', imageUrl: '', limit: 10000, remain: 10000},
];

const randomCryptoImgUrl = 'https://cdn.pixabay.com/photo/2017/03/12/02/57/bitcoin-2136339_960_720.png';

const formatNumberToCurrency = (n: number) => {
  return n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


const AccountLimitsComponent = forwardRef(({ Root }: AccountLimitsComponentProps) => {
  const { props, style } = Root || {};
  const { } = props || {};  
  const [index, setIndex] = React.useState(0);

  const styles = useMergeStyles(style);

  const renderTabbar = (title: string, indexTabbar: number) => (
    <TouchableOpacity style={[styles.headerView, indexTabbar === index && styles.headerSelectedBg]} onPress={() => setIndex(indexTabbar)}>
      <Text style={styles.headerTitle}>{title}</Text>
    </TouchableOpacity>
  )

  const renderFialContent = () => {
   return fiatDummyData.map((item) => {
    const percent = 100 - (item.remain / item.limit * 100);
    return (
    <View style={styles.rowFialItem}>
      <View style={styles.rowBetween}>
        <Text style={styles.limitTitle}>{`${item.title} (₱ ${formatNumberToCurrency(item.limit)})`}</Text>
        <Text style={styles.remainTitle}>{`₱ ${formatNumberToCurrency(item.remain)} remaining`}</Text>
      </View>
      <ProcessBar processPercent={percent} />
    </View>
    )
   });
  }

  const renderCryptoContent = () => {
    return cryptoDummyData.map((item) => {
     const percent = 100 - (item.remain / item.limit * 100);
     return (
     <View style={styles.rowFialItem}>
       <View style={styles.rowBetween}>

       <View style={styles.rowTitle}>
        <View style={styles.imageWrapper}>
          <Image style={styles.iconCrypto} source={{uri: randomCryptoImgUrl}}/>
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.limitTitle}>{`${item.symbol} (${formatNumberToCurrency(item.limit)} AXS)`}</Text>
          <Text style={styles.limitTitle}>{`${item.name}`}</Text>
        </View>
        </View>
         <Text style={styles.remainTitle}>{`${item.remain} AXS remaining`}</Text>
       </View>
       <ProcessBar processPercent={percent} />
     </View>
     )
    });
  }
  

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>Account Limits</Text>
      <View style={styles.tabbar}>
        <View style={styles.headerWrapper}>
          {renderTabbar('Fiat', 0)}
          {renderTabbar('Crypto', 1)}
        </View>
        <View style={styles.content}>
          {index === 0 ? renderFialContent() : renderCryptoContent()}
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.titleLogo}>Powered by</Text>
          <PDAXIcon height={40} width={150} />
        </View>
      </View>
    </ScrollView>
  );
});

export default AccountLimitsComponent;
