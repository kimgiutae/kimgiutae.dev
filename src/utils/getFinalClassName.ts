const getFinalClassName: GetFinalClassName = (...classNames) => {
  const className = classNames.filter(Boolean).join(' ')
  return className
}

type GetFinalClassName = (...classNames: [string, ...string[]]) => string

export default getFinalClassName
