
import store from '@/redux/store'
import { Provider } from 'react-redux'
export const FullPage = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    )
}
