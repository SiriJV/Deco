import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}