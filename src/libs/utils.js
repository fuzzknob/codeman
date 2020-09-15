import uid from 'uid-safe'

export function generateUid(length) {
  return uid.sync(length)
}
