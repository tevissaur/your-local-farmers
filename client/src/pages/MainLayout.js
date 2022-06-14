
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../utils/queries';
import store from '../utils/store';
import { setCategories } from '../resources/categories/categories.actions';

const MainLayout = () => {
    
  const { loading, data, error } = useQuery(QUERY_CATEGORIES)

  useEffect(() => {
    loading ? console.log(loading) : store.dispatch(setCategories(data.categories))
    
  }, [loading, data])
  

  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
};

export default MainLayout;
