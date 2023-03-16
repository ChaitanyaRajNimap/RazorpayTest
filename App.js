import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const makePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: '', // Your api key
      amount: '5000', //Make sure to multiply your amount in Rs * 100; coz here 100 = 1 RS
      name: 'Monkey D. Luffy',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software',
      },
      theme: {color: '#F37254'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.heading}>Razorpay Demo</Text>
      <Button title="Make a Payment" onPress={makePayment} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginBottom: 10,
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
