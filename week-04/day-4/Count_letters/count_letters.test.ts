import {countLetter} from './count_letters';

var test=require('tape').test
test('Occurance of letters in a string',function(t:any){
  var actual=countLetter('apple')
  var expected={a:1,p:2,l:1,e:1}
  t.deepEqual(actual,expected)
  t.end()
});

test('Occurance of letters in a string',function(t:any){
  var actual=countLetter('')
  var expected={}
  t.deepEqual(actual,expected)
  t.end()
});

test('Occurance of letters in a string',function(t:any){
  var actual=countLetter('qwertzztreruiiuzt')
  var expected={a:1,p:2,l:1,e:1}
  t.deepEqual(actual,expected)
  t.end()
});