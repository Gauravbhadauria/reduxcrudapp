import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser, updateUser} from '../redux/UserSlice';
import {useNavigation, useRoute} from '@react-navigation/native';

const AddUser = () => {
  const route = useRoute();
  const [name, setName] = useState(
    route.params.type == 'edit' ? route.params.data.name : '',
  );
  const [email, setEmail] = useState(
    route.params.type == 'edit' ? route.params.data.email : '',
  );
  const [mobile, setMobile] = useState(
    route.params.type == 'edit' ? route.params.data.mobile : '',
  );
  const [address, setAddress] = useState(
    route.params.type == 'edit' ? route.params.data.address : '',
  );

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const validate = () => {
    let valid = true;
    if (name == '') {
      valid = false;
    }
    if (email == '') {
      valid = false;
    }
    if (mobile == '') {
      valid = false;
    }
    if (address == '') {
      valid = false;
    }

    return valid;
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Enter User Name"
        value={name}
        onChangeText={txt => setName(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
          paddingLeft: 10,
        }}
      />
      <TextInput
        placeholder="Enter User Email"
        value={email}
        onChangeText={txt => setEmail(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
          paddingLeft: 10,
        }}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Enter User Mobile"
        value={mobile}
        onChangeText={txt => setMobile(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
          paddingLeft: 10,
        }}
        keyboardType="number-pad"
        maxLength={10}
      />
      <TextInput
        placeholder="Enter User Address"
        value={address}
        onChangeText={txt => setAddress(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
          marginTop: 50,
          borderRadius: 10,
          paddingLeft: 10,
        }}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          borderRadius: 10,
        }}
        onPress={() => {
          if (validate()) {
            if (route.params.type == 'edit') {
              dispatch(
                updateUser({
                  name: name,
                  email: email,
                  mobile: mobile,
                  address: address,
                  index: route.params.index,
                }),
              );
            } else {
              dispatch(addUser({name, email, address, mobile}));
            }

            navigation.goBack();
          } else {
            Alert.alert('Please Fill Correct Data');
          }
        }}>
        <Text style={{color: 'white'}}>Save User</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddUser;
