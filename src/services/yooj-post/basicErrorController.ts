// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** errorHtml GET /api/post/error */
export async function errorHtmlUsingGET(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'GET',
    ...(options || {}),
  });
}

/** errorHtml PUT /api/post/error */
export async function errorHtmlUsingPUT(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** errorHtml POST /api/post/error */
export async function errorHtmlUsingPOST(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'POST',
    ...(options || {}),
  });
}

/** errorHtml DELETE /api/post/error */
export async function errorHtmlUsingDELETE(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** errorHtml PATCH /api/post/error */
export async function errorHtmlUsingPATCH(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'PATCH',
    ...(options || {}),
  });
}
