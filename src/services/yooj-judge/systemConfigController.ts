// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getSystemConfig GET /api/judge/get-sys-config */
export async function getSystemConfigUsingGET(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getSystemConfig PUT /api/judge/get-sys-config */
export async function getSystemConfigUsingPUT(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getSystemConfig POST /api/judge/get-sys-config */
export async function getSystemConfigUsingPOST(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getSystemConfig DELETE /api/judge/get-sys-config */
export async function getSystemConfigUsingDELETE(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getSystemConfig PATCH /api/judge/get-sys-config */
export async function getSystemConfigUsingPATCH(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/judge/get-sys-config', {
    method: 'PATCH',
    ...(options || {}),
  });
}
