import { Route, Routes } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default Login;
