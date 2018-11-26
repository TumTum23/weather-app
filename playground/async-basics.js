console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
 }, 10000);

setTimeout(() => {
  console.log('second setTimeout')
}, 0)

console.log('Finishing up');
