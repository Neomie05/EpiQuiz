import { Image, View, StyleSheet, Platform, ImageSourcePropType, Pressable } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { avatars } from '@/config'


export default function Header({userName, avatarId, setPage}:
  {
    setPage: React.Dispatch<React.SetStateAction<string>>,
    userName: string,
    avatarId: number,
  }
) {
  const userImage = avatars[avatarId]
  return (
    <ThemedView style={styles.header}>

      <View style={styles.logoSide}>
        <Pressable onPress={() => setPage('home')}>
          <Image
            source={require('@/assets/logos/epiquiz_logo2.png')}
            style={styles.logo}
          />
        </Pressable>
      </View>

      <View style={styles.avatarSide}>
        <Pressable onPress={() => setPage('login')}>
          <Image source={userImage} style={styles.avatar} />
        </Pressable>
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
    paddingHorizontal: 30,
    // backgroundColor: 'green',
  },


  logoSide: {

  },
  logo: {
    width: 120,
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
