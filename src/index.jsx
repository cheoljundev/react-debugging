import {StrictMode} from "react";
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    // StrictMode는 개발 상황에서만 두번씩 실행해줘서 에러를 처음부터 화면에서 확인할 수 있도록 돕는다.
    // 이렇게 하면 값을 수정하면 에러가 발생하는 상황을 첫 화면에서 잡을 수 있다.
    <StrictMode>
        <App />
    </StrictMode>
);
