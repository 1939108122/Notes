function foo(v) {
  let c = {
    add() {
      return v + 1
    },
    sub() {
      return v
    }
  }
  return c
}

const a = foo(3)


