import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import MainLayout from './pages/MainLayout';
import Error from './pages/Error';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Open from './pages/Open';
import MyPages from './pages/MyPages';
import MyPageMentor from './pages/MyPageMentor';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/class/open" element={<Open />} />
          <Route path="/mypage/subscribe" element={<MyPages />} />
          <Route path="/mypage/mentor" element={<MyPageMentor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
