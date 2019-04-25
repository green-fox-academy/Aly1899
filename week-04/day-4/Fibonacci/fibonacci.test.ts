'use strict'

import {fibonacci} from './fibonacci';

var test=require('tape').test
test('Return the Fibonacci sequence',function(t:any){
  var actual=fibonacci(5)
  var expected=[0,1,1,2,3]
  t.deepEqual(actual,expected)
  t.end()
});

var test=require('tape').test
test('Return the Fibonacci sequence',function(t:any){
  var actual=fibonacci(0)
  var expected:number[]=[]
  t.deepEqual(actual,expected)
  t.end()
});