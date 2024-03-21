// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getSystemConfig GET /api/judge/get-sys-config */
export async function getSystemConfigUsingGet(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getSystemConfig PUT /api/judge/get-sys-config */
export async function getSystemConfigUsingPut(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getSystemConfig POST /api/judge/get-sys-config */
export async function getSystemConfigUsingPost(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getSystemConfig DELETE /api/judge/get-sys-config */
export async function getSystemConfigUsingDelete(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getSystemConfig PATCH /api/judge/get-sys-config */
export async function getSystemConfigUsingPatch(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'PATCH',
    ...(options || {}),
  });
}
