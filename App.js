import React from 'react';
import Heading from './ReactProject/WeatherApplication/Heading';
import Weather from './ReactProject/WeatherApplication/Weather';


// import Login from './Forms/Login';
// import Signup from './Forms/Signup';
// import Password from './Forms/Password';

function App() {
  return (
    <>
    <Heading />
    <Weather />  
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/password' element={<Password />}/>
    </Routes>
    </BrowserRouter>
   */}
    </>
  );
}
export default App;
