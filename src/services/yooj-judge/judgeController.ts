// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getVersion GET /api/judge/version */
export async function getVersionUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseHashMapStringObject_>('/api/judge/version', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getVersion PUT /api/judge/version */
export async function getVersionUsingPUT(options?: { [key: string]: any }) {
  return request<API.BaseResponseHashMapStringObject_>('/api/judge/version', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** getVersion POST /api/judge/version */
export async function getVersionUsingPOST(options?: { [key: string]: any }) {
  return request<API.BaseResponseHashMapStringObject_>('/api/judge/version', {
    method: 'POST',
    ...(options || {}),
  });
}

/** getVersion DELETE /api/judge/version */
export async function getVersionUsingDELETE(options?: { [key: string]: any }) {
  return request<API.BaseResponseHashMapStringObject_>('/api/judge/version', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** getVersion PATCH /api/judge/version */
export async function getVersionUsingPATCH(options?: { [key: string]: any }) {
  return request<API.BaseResponseHashMapStringObject_>('/api/judge/version', {
    method: 'PATCH',
    ...(options || {}),
  });
}
