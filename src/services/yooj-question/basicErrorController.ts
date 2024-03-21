// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** error GET /api/question/error */
export async function errorUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/question/error', {
    method: 'GET',
    ...(options || {}),
  });
}

/** error PUT /api/question/error */
export async function errorUsingPut(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/question/error', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** error POST /api/question/error */
export async function errorUsingPost(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/question/error', {
    method: 'POST',
    ...(options || {}),
  });
}

/** error DELETE /api/question/error */
export async function errorUsingDelete(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/question/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** error PATCH /api/question/error */
export async function errorUsingPatch(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/question/error', {
    method: 'PATCH',
    ...(options || {}),
  });
}
