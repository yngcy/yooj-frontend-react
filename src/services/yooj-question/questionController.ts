// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addQuestion POST /api/question/add */
export async function addQuestionUsingPOST(
  body: API.QuestionAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/question/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteQuestion POST /api/question/delete */
export async function deleteQuestionUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/question/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editQuestion POST /api/question/edit */
export async function editQuestionUsingPOST(
  body: API.QuestionEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/question/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getQuestionById GET /api/question/get */
export async function getQuestionByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseQuestion_>('/api/question/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getQuestionVOById GET /api/question/get/vo */
export async function getQuestionVOByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseQuestionVO_>('/api/question/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getHealth GET /api/question/health */
export async function getHealthUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseString_>('/api/question/health', {
    method: 'GET',
    ...(options || {}),
  });
}

/** listQuestionByPage POST /api/question/list/page */
export async function listQuestionByPageUsingPOST(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestion_>('/api/question/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listQuestionVOByPage POST /api/question/list/page/vo */
export async function listQuestionVOByPageUsingPOST(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVO_>('/api/question/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyQuestionVOByPage POST /api/question/my/list/page/vo */
export async function listMyQuestionVOByPageUsingPOST(
  body: API.QuestionQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionVO_>('/api/question/my/list/page/vo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** doQuestionSubmit POST /api/question/question_submit/do */
export async function doQuestionSubmitUsingPOST(
  body: API.QuestionSubmitAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/api/question/question_submit/do', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getQuestionSubmitVOById GET /api/question/question_submit/get/vo */
export async function getQuestionSubmitVOByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getQuestionSubmitVOByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseQuestionSubmitVO_>('/api/question/question_submit/get/vo', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listQuestionSubmitByPage POST /api/question/question_submit/list/page */
export async function listQuestionSubmitByPageUsingPOST(
  body: API.QuestionSubmitQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageQuestionSubmitVO_>('/api/question/question_submit/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateQuestion POST /api/question/update */
export async function updateQuestionUsingPOST(
  body: API.QuestionUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/api/question/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
