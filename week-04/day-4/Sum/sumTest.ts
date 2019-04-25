import {Sum} from './sum';

var test=require('tape').test
test('Sum multiple numbers',function(t:any){
  const sum= new Sum();
  let numbers:number[]=[1,2,3,4]
  var actual=sum.sum(numbers)
  var expected=10
  t.equal(actual,expected)
  t.end()
});

test('Sum empty list',function(t: { equal: (arg0: number, arg1: number) => void; end: () => void; }){
  const sum= new Sum();
  let numbers:number[]=[]
  var actual=sum.sum(numbers)
  var expected=0
  t.equal(actual,expected)
  t.end()
});

test('Sum one number',function(t: { equal: (arg0: number, arg1: number) => void; end: () => void; }){
  const sum= new Sum();
  let numbers:number[]=[4]
  var actual=sum.sum(numbers)
  var expected=4
  t.equal(actual,expected)
  t.end()
});