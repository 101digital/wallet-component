import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { CryptoTransactionDetailsComponentStyles } from './types';
import { ThemeContext } from 'react-native-theme-component';

const useMergeStyles = (
  style?: CryptoTransactionDetailsComponentStyles
): CryptoTransactionDetailsComponentStyles => {
  const { fonts } = useContext(ThemeContext);

  const defaultStyles = StyleSheet.create({
    container: {
      height: '100%',
      paddingHorizontal: 25,
    },
    pageTitle: {
      fontSize: 24,
      fontFamily: fonts.medium,
      color: '#3E2D68',
    },
    rowBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    content: {
      borderRadius: 8,
      marginTop: 20,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 20,
      paddingTop: 20,
      marginBottom: 20,
    },
    logoContainer: {
      alignItems: 'center',
      marginTop: 20,
    },
    shareContainer: {
      marginTop: 15,
    },
    infoTitle: {
      color: '#7F7B82',
      fontSize: 12,
      fontFamily: fonts.regular,
    },
    infoSubTitle: {
      color: '#1D1C1D',
      fontSize: 12,
      fontFamily: fonts.regular,
    },
  });
  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
