(module
  (type $t0 (func (param i64) (result i64)))
  (func $myFactorial (export "myFactorial") (type $t0) (param $p0 i64) (result i64)
    local.get $p0
    i64.const 1
    i64.eq
    if $I0 (result i64)
      i64.const 1
    else
      local.get $p0
      i64.const 1
      i64.sub
      call $myFactorial
      local.get $p0
      i64.mul
    end)
  (memory $memory (export "memory") 0))