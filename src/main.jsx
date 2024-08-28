import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// react-router-dom
import { BrowserRouter } from 'react-router-dom'
// reduxt-toolkit
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
// react-query
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>
)
