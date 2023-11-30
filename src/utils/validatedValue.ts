export function filterNullValue(data: string, defaultValue?: string) {
  return data === 'N/A' ? defaultValue || '정보가 없습니다.' : data
}
