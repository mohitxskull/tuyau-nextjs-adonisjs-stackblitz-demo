import { createTuyau } from '@tuyau/client';
import { api } from '@acme/backend/api';

/**
 * Initialize the Tuyau client with the generated `api` object generated
 * by `node ace tuyau:generate`
 */
export const tuyau = createTuyau({
  api,
  baseUrl: 'http://localhost:3333',
});
