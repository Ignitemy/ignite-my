// remove spaces before appending "..." on truncated strings
const getLimit = (input, limit) => {
  if (input[limit - 1] === ' ') {
    return limit - 1
  }
  return limit
}

export const truncateString = (input, limit) =>
  input.length > limit ? `${input.substring(0, getLimit(input, limit))}...` : input
