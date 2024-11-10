import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type {AppRouter} from '../../../backend/src/trpc/routers/main'
const url = import.meta.env.VITE_TRPC_BACKEND_URL
export const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url,
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    }),
  ],
});
