import apiClient from './client';

export async function fetchBudget() {
  const response = await apiClient.get('/budget');
  return response.data;
}


