import fs from 'fs';
import path from 'path';

(() => {
	console.log('Starting loop');
	for (let i = 0; i < 10000; i++) {
		fs.appendFileSync(
			path.join(__dirname, 'src', 'test1.ts'),
			'console.log("Hello, World!");',
		);
		fs.appendFileSync(
			path.join(__dirname, 'src', 'test2.ts'),
			'console.log("Hello, World!");'
		);
		fs.appendFileSync(
			path.join(__dirname, 'src', 'test3.ts'),
			'console.log("Hello, World!");'
		);
		fs.appendFileSync(
			path.join(__dirname, 'src', 'test4.ts'),
			'console.log("Hello, World!");'
		);
	}

	console.log('Loop completed');
})();
