console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
 }, 3000);

setTimeout(() => {
  console.log('yoo')
}, 0)

console.log('Finishing up');
