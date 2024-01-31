import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Container } from './Container/Container.styled';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Container>
  );
};
