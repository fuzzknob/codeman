import React from 'react'

type VisibleProps<T> = T & {
  visible: boolean
}

export function withVisible<T = Record<string, unknown>>(
  Component: React.ComponentType<T>,
) {
  return (props: VisibleProps<T>) => {
    if (!props.visible) return <div />
    return <Component {...props} />
  }
}
