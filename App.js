// App.js
import React, { useState } from 'react';
import { View } from 'react-native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (isAuthenticated) => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />}
    </View>
  );
}
