console.log('Starting app');

setTimeout(() => {
  console.log('Inside of callback');
 }, 30000);

setTimeout(() => {
  console.log('second setTimeout')
}, 0)

console.log('Finishing up');
