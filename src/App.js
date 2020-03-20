import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import { AuthContext } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContext.Provider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContext.Provider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
