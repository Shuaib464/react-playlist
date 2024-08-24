import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { getGithubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact-us',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />}> 
          {/* <Route path='shuaib' element={} /> */}   
          {/* nesting in routes  */}
        </Route>
        <Route path='contact-us' element={<Contact />} />
        <Route path='user/:userid' element={<User />} />
        <Route 
        loader={getGithubInfoLoader}
        path='github' 
        element={<Github />}
        />
      </Route>
    )
)
/* 
    NOTE -> Router new feature
    If we want to fetch data from an api or database, then we directly define fetching operation inside 
    "loader" property and it is optimize approach 
    bcoz -> when we take cursor over the link than it start fetching on that particular event (useEffect se bhi pehle)
    and it also contains the fetched data in cache for better optimization
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
