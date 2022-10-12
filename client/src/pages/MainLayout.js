
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { QUERY_CATEGORIES, GET_ME } from '../utils/queries';
import AuthService from '../services/authentication.service'
import store from '../utils/store';
import { setCategories } from '../resources/categories/categories.actions';
import Banner from '../components/Banner';
import styled from '@mui/material/styles/styled';
import { setActivePage, setIsFarmer } from '../utils/actions';
import { setCartItems } from '../resources/cart/cart.actions' 
import UtilsService from '../services/utils.service';
import { setSelectedCategories } from '../resources/browse-farms/browse-farms.actions';


const MainContainer = styled('main')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: 'calc(100vh - 316px)',
  backgroundColor: theme.palette.common.white
}));



const MainLayout = () => {

  const { profile: { loggedIn, isFarmer } } = store.getState()

  const { loading, data, error } = useQuery(QUERY_CATEGORIES)
  const [getMe, { data: me, error: userInfoError, loading: userInfoLoading }] = useLazyQuery(GET_ME)

  useEffect(() => {

    store.dispatch(setActivePage(UtilsService.getActivePage()))

    if (loggedIn) {
      let { data: { _id } } = AuthService.getProfile()
      getMe({
          variables: {
              id: _id
          }
      })
  }
  }, [])
  useEffect(() => {
    console.log(store.getState())
  })
  useEffect(() => {
    if (!userInfoLoading && me?.me !== undefined) {
      console.log(me?.me?.cart)
      store.dispatch(setIsFarmer(me?.me?.isFarmer))
      store.dispatch(setCartItems(UtilsService.cleanCart(me?.me?.cart?.items)))
    }

  }, [me, isFarmer, userInfoLoading])

  useEffect(() => {
    if (!loading) {
      store.dispatch(setCategories(data.categories))
      store.dispatch(setSelectedCategories(data.categories))
    }
  }, [loading, data])


  return (
    <>
      <Header />
      <MainContainer>
        <Banner />
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainLayout;
