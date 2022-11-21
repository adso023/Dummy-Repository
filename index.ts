import fs from 'fs';
import path from 'path';

(() => {
	console.log('Starting loop');

	for (let i = 0; i < 100; i++) {
		console.log(`Writing to test${i}.ts`);
		for(let j = 0; i < 1000; j++) {
			fs.appendFileSync(
				path.join(__dirname, 'src', `test${i}.ts`),
				'console.log("Hello, World!");'
			);
		}
		console.log(`Finished writing to test${i}.ts`);
	}

	// for (let i = 0; i < 1000; i++) {
	// 	fs.appendFileSync(
	// 		path.join(__dirname, 'src', 'test1.ts'),
	// 		'console.log("Hello, World!");',
	// 	);
	// 	fs.appendFileSync(
	// 		path.join(__dirname, 'src', 'test2.ts'),
	// 		'console.log("Hello, World!");'
	// 	);
	// 	fs.appendFileSync(
	// 		path.join(__dirname, 'src', 'test3.ts'),
	// 		'console.log("Hello, World!");'
	// 	);
	// 	fs.appendFileSync(
	// 		path.join(__dirname, 'src', 'test4.ts'),
	// 		'console.log("Hello, World!");'
	// 	);
	// }

	console.log('Loop completed');
})();
