// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** errorHtml GET /api/post/error */
export async function errorHtmlUsingGet(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'GET',
    ...(options || {}),
  });
}

/** errorHtml PUT /api/post/error */
export async function errorHtmlUsingPut(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** errorHtml POST /api/post/error */
export async function errorHtmlUsingPost(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'POST',
    ...(options || {}),
  });
}

/** errorHtml DELETE /api/post/error */
export async function errorHtmlUsingDelete(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'DELETE',
    ...(options || {}),
  });
}

/** errorHtml PATCH /api/post/error */
export async function errorHtmlUsingPatch(options?: { [key: string]: any }) {
  return request<API.ModelAndView>('/api/post/error', {
    method: 'PATCH',
    ...(options || {}),
  });
}
