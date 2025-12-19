import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

/*获取页面节点,并转换为虚拟DOM*/
createRoot(document.getElementById('root')!).render(
    /*将组件渲染到目标结点的页面上: 使用React严格语法，比如react过时的api*/
    <StrictMode>
        <App/>
    </StrictMode>,
)