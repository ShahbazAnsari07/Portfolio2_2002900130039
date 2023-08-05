import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './components/Product';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { Gallery, Profile } from './components/Gallery';
// import  {Gallery1} from './componentsGallery1';
// import { Profile } from './components/Gallery';
// import EvaluateExpression from './components/EvaluateExpression';
// import ConditionalRendering from './components/ConditionalRendering';
// import InlineCSS from './components/InlineCSS';
import ProductClass from './components/ProductClass';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Gallery url = "image/NoteImg.png"></Gallery>
    <Profile url =  "This is mine."></Profile>
   */}

   {/* <EvaluateExpression />
   <ConditionalRendering /> */}
   {/* <InlineCSS />
   */}
  {/* <ProductClass />
   <Product /> */}

   <Counter />
  </React.StrictMode>

);
// reportWebVitals();
