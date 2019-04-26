import {CAB} from './cows_and_bulls'

var test=require('tape').test
test('Sum multiple numbers',function(t:any){
  const cab= new CAB(2146);
  let number:number=7445
  var actual=cab.guess(number)
  var expected={cow:0, bull:1}
  t.deepEqual(actual,expected)
  t.end()
});
