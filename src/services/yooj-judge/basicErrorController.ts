// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** error GET /api/judge/error */
export async function errorUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/error', {
    method: 'GET',
    ...(options || {}),
  });
}

/** error PUT /api/judge/error */
export async function errorUsingPut(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/error', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** error POST /api/judge/error */
export async function errorUsingPost(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/error', {
    method: 'POST',
    ...(options || {}),
  });
}

/** error DELETE /api/judge/error */
export async function errorUsingDelete(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** error PATCH /api/judge/error */
export async function errorUsingPatch(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/error', {
    method: 'PATCH',
    ...(options || {}),
  });
}
