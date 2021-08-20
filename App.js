import React from 'react';
import { 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';
import styles from './Style';

export default () => {

  //fonte: https://www.blogdocasamento.com.br/70-frases-para-seus-biscoitos-da-sorte/
  const sentences = [
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.',
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor  e alegria em todas as oportunidades e verás que a paz nasce dentro de você.'
  ];

  const [phrase, setFrase] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Boa Sorte!</Text>
      </View>
      <View style={styles.contentPhrase}>
        <Text style={styles.phrase}>{phrase}</Text>
      </View>
      <View style={styles.contentButton} >
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.labelButton}
            onPress={() => setFrase(sentences[Math.floor(Math.random() * sentences.length)])}>
            Quebrar o Biscoito
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
