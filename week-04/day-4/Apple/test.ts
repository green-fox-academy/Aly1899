import {Apple} from './apple';
import * as test from 'tape';

test('Apple is correct',function(t:any){
  const apple= new Apple();
  var actual=apple.getApple()
  var expected='apples'
  t.equal(actual,expected)
  t.end()
});

