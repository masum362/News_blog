import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Sharinng/Main/Main";
import Hero from "../components/hero_section/Hero";
import International from "../components/International/International_Section";
import National_Section from "../components/National/National_Section";
import Playing_Section from "../components/Playing/Playing_Section";
import Entertainment_Section from "../components/Entertainment/Entertainment_Section";
import Campas_Section from "../components/Campas/Campas_Section";
import AllCountry_Section from "../components/All_Country/AllCountry_Section";
import Viodeo_Section from "../components/Viodeo/Viodeo_Section";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
          {
            path:'/Home',
            element:<Home></Home>,
          },
          {
            path:'/international',
            element:<International></International>        
          },
          {
            path:'/National',
            element:<National_Section></National_Section>    
          },
          {
            path:'/Playing',
            element:<Playing_Section></Playing_Section>
          },
          {
            path:'/Entertainment',
            element:<Entertainment_Section></Entertainment_Section>
          },
          {
            path:'/Compas',
            element:<Campas_Section></Campas_Section>
          },
          {
            path:'/AllCountry',
            element:<AllCountry_Section></AllCountry_Section>
          },
          {
            path:'/Viodeo',
            element:<Viodeo_Section></Viodeo_Section>
          },
          
        

          
        ]
        
    }
 ])
                                                                                                                                                                 