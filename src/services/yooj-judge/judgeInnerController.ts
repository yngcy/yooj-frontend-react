// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doJudge POST /api/judge/inner/do */
export async function doJudgeUsingPOST(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.doJudgeUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.QuestionSubmit>('/api/judge/inner/do', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
