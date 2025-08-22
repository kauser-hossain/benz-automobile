import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import routes from './router/routes'
import AuthProvider from './providers/AuthProviders'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <QueryClientProvider client={queryClient}>
      <RouterProvider  router={routes}/>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
