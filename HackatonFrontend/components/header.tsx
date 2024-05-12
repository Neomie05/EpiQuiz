import { Image, View, StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ContextStruct } from '@/config';

export default function Header({context}: { context: ContextStruct }) {
  return (
    <ThemedView style={styles.header}>

      <View style={styles.logoSide}>
        <Image
          source={require('@/assets/logos/epiquiz_logo2.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.avatarSide}>
        <Image
          source={context.userImage}
          style={styles.avatar}
        />
      </View>

    </ThemedView>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 10,
    // backgroundColor: 'green',
  },


  logoSide: {

  },
  logo: {
    width: 150,
    height: 38
  },


  avatarSide: {

  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 25
  },
});
