import React from 'react'
import Axios from 'axios';
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ButtonLogin, FormLogin, Gap, HeaderLogin } from '../../components'
import {useForm} from '../../utils';

const Login = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form : ', form);
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
      .then(res => {
        console.log('success', res);
      })
      .catch(err => {
        console.log('error ', err);
      });
  };


    return (
      <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.page}>
        <Gap height={17} />
        <HeaderLogin title="Login" subTitle="Add your details to login" />
        <View style={styles.container}>
          <FormLogin
            placeholder="Your email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={27} />
          <FormLogin
            placeholder="Your password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={27} />
          <ButtonLogin text="Login" onPress={onSubmit} />
          <Gap height={30} />
          <Text style={styles.text}>or Login With</Text>
          <Gap height={27} />
          <ButtonLogin
            text="Login with facebook"
            color="#367FC0"
            onPress={() => navigation.navigate('SplashScreen')}
          />
          <Gap height={27} />
          <ButtonLogin text="Login with Google" />
          <Gap height={37} />
          <Text style={styles.text}>
            Don't have an Account?
          </Text>
        </View>
      </View>
    </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
      },
      container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 24,
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        // borderTopRightRadius: 35,
        // borderTopLeftRadius: 35,
      },
      text: {
        fontSize: 15,
        // fontFamily: 'Poppins-Regular',
        color: '#8d92a3',
      },
})
