import React from 'react'
import Header from './components/header/Header'
import Center from './components/center/Center'
// import Footers from './components/footer/Footers'
// import MyInterceptor1 from './components/interceptor/MyInterceptor1'
// import MyInterceptor2 from './components/interceptor/MyInterceptor2'
// import MyIntercepter3 from './components/interceptor/MyIntercepter3'
// import MyInterceptor4 from './components/interceptor/MyInterceptor4'
// import Categories from './components/categories/Categories'
// import Carousel from './components/carousel/Carousel'

// import BazzarLog from './components/bzzarLog/BazzarLog'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'
import AboutUs from './components/aboutus/AboutUs'
import Carrer from './components/carrere/Carrer'
import ListDemo4 from './components/List/ListDemo4'
import NotFound from './components/notfound/NotFound'
import { Route, Routes } from 'react-router-dom'
import RouterNavBar from './components/router/RouterNavBar'
import ProductDetails from './components/List/ProductDetails'
import ProductDetail from './components/List/ProductDetail'
import PermanentJobs from './components/carrere/PermanentJobs'
import ContractJobs from './components/carrere/ContractJobs'
import ProtectedRoute from './components/util/ProtectedRoute'
// import Navbar from './components/navbar/Navbar'

export default function App() {
  //?Interceptor called here
  // MyInterceptor1();
  // MyInterceptor2();
  // MyIntercepter3();
  // MyInterceptor4();//Using client not a axios

  return (

    <div>
      {/* 1: Header Component */}
      <Header />

      {/* 2: Navbar here */}
      {/* <Navbar /> */}
      <RouterNavBar />

      {/* 3: Categorise here  */}
      {/* <Categories/> */}

      {/* 4: Carousel here */}
      {/* <Carousel/> */}

      {/* 5: Center Component */}
      <Center />

      {/* 6: Footer Component */}
      {/* <Footers /> */}

      {/* 7:React Router Nav-Bar with Link */}
      {/* <RouterNavBar/> */}

      {/* 7: Router start here */}

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/categories' element={<Categories />} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/carrer' element={<Carrer />}>
          <Route index element={<PermanentJobs />} />  {/* Default Nested Routing here (Index routing)*/}
          <Route path='permanent' element={<PermanentJobs />} />  {/*Nested Routing here*/}
          <Route path='contract' element={<ContractJobs />} /> {/*Nested Routing here*/}
        </Route>
        <Route exact path='/List' element={
          <ProtectedRoute>
            <ListDemo4 />
          </ProtectedRoute>
        } />
        <Route exact path='*' element={<NotFound />} />
        <Route exact path='/productdetails/:id' element={<ProductDetails />} />{/*Path params */}
        <Route exact path='/productdetail' element={<ProductDetail />} />{/*Query Params*/}

      </Routes>
    </div>
  )
}

