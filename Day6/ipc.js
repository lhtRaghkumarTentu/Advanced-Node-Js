
process.on('message', message => {
    console.log('Message from parent:', message);
   process.send('Message from worker');
});
   