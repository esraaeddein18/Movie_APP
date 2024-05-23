import React from 'react';
//01116507559
//و نصيحه للناس الفريش في المجال، عيشوا الواقع وبلاش تعيشوا أوهام هتفضلوا وراها لحد ما العمر يعدي بيكم
// و تلاقوا نفسكم خسرتوا كل حاجه حرفيا، لا منك اتعلمت ولا منك اشتغلت و اخدت خبرة ولا منك عملت فلوس،
// عيش الواقع وأدي كل فترة من حياتك حقها ولا تستبق الرزق بأنك تنط خطوات لازمه كان تعدي عليها الاول لان صدقني هتخسر كتير ..

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { QueryClient,QueryClientProvider} from 'react-query';

let queryClient=new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>

    <App />
  </QueryClientProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
