// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** errorHtml GET /api/user/error */
export async function errorHtmlUsingGET(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/user/error', {
    method: 'GET',
    ...(options || {}),
  });
}

/** errorHtml PUT /api/user/error */
export async function errorHtmlUsingPUT(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/user/error', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** errorHtml POST /api/user/error */
export async function errorHtmlUsingPOST(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/user/error', {
    method: 'POST',
    ...(options || {}),
  });
}

/** errorHtml DELETE /api/user/error */
export async function errorHtmlUsingDELETE(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/user/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** errorHtml PATCH /api/user/error */
export async function errorHtmlUsingPATCH(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/user/error', {
    method: 'PATCH',
    ...(options || {}),
  });
}
