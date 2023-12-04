export function splitPeopleList(peoples: string) {
  return peoples.split(', ')
}

export function highResolutionImage(url: string) {
  return url.replace('SX300', 'SX700')
}
