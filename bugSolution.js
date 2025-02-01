```javascript
//bugSolution.js
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch('https://api.example.com/user');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      {user ? (
        <Text>Username: {user.name}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};
export default MyComponent;
```