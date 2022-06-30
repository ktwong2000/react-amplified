import { View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme
import { Text } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
//import Amplify from 'aws-amplify';

//import {AmplifyProvider} from "@aws-amplify/ui-react";
//import awsconfig from './aws-exports';
//Amplify.configure(awsconfig);
//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



export default function App() {
  return <View>
    
    <Text>Hello world</Text>
    <Button
  loadingText=""
  onClick={() => alert('hello')}
  ariaLabel=""
>
  Click me!
</Button>
  
  
  
  </View>;
}
