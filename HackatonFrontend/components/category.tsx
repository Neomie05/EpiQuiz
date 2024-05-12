import React from 'react';
import { Image, Text, StyleSheet, View, ImageSourcePropType } from 'react-native';

export default function Category({image, title, description, nbQuestion, setPage} : {
  image: ImageSourcePropType, title: string, description: string, nbQuestion: number,
  setPage: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <View style={styles.category}>
      <Image source={image} style={styles.category_image} />
      <View style={styles.category_description}>
        <Text style={styles.category_name}>{title}</Text>
        <Text style={styles.category_details}>{description}</Text>
        <Text style={styles.category_questions}>
          {`${nbQuestion} question${nbQuestion > 1 ? 's':''}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    gap: 10,
    minWidth: 380,
    maxWidth: 450,
    height: 130,
    backgroundColor: '#bbb',
    marginHorizontal: 15,
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  category_image: {
    width: 150,
    height: '100%',
    borderRadius: 5,
  },
  category_description: {
    flex: 1,
  },
  category_name: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    // textAlign: 'center',
    marginLeft: 12,
    fontSize: 18,
  },
  category_details: {
    fontSize: 11,
    flex: 1,
    overflow: 'hidden',
  },
  category_questions: {
    textAlign: 'right',
    fontSize: 12,
  },
});
