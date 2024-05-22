import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { Root } from './components/Root/Root'
import { Auth } from './pages/Auth'
import { User } from './pages/User'
import { ErrorPage } from './pages/ErrorPage'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/sign-in',
        element: <Auth/>
      },
      {
        path:'/user',
        element: <User/>
      },
      {
        path:'/*',
        element: <ErrorPage/>
      }
    ]
  }  
])




export default function App() {

    return <RouterProvider router={router} />
}



{/* 

return (
  <BrowserRouter>

      <Header/>

      <Routes>

          <Route ... />
          <Route ... />

      </Routes>

      <Footer/>

  </BrowserRouter> 
)
*/}