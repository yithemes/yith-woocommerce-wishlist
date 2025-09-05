const path = require( 'path' );

const rootDir = path.resolve( __dirname, '../../' );

const rootDirResolve = ( ...args ) => path.resolve( rootDir, ...args )

module.exports = {
	rootDir,
	rootDirResolve
};