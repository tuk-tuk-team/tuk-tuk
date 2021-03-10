const func = require('./simple');

test('to return string', () => {
	const vvv = func();
	expect(vvv).toEqual('it\'s a string');
});
