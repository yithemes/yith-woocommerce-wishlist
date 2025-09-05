const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const { camelCaseDash }                 = require( '@wordpress/dependency-extraction-webpack-plugin/lib/util' );
const defaultConfig                     = require( '@wordpress/scripts/config/webpack.config' );
const { rootDirResolve }                = require( './shared' );

const SCOPE            = '@lapilli-ui/'; // Scope for packages to export.
const WP_HANDLE_PREFIX = 'lapilli-ui-'; // Prefix for WordPress handles of JS scripts enqueued.
const JS_GLOBAL        = 'lapilliUI'; // Global variable to be exposed in the window.
const NAMESPACE        = 'lapilliUI'; // Namespace, used in devTools.
const DIST_PATH        = rootDirResolve( 'dist/lapilli-ui' ); // Dist folder.

const { dependencies } = require( rootDirResolve( 'package.json' ) );
const packages         = Object.keys( dependencies ).filter( dep => !!dep.startsWith( SCOPE ) ).map( dep => dep.replace( SCOPE, '' ) );

const depMap    = packages.reduce( ( acc, _ ) => ( { ...acc, ...{ [ SCOPE + _ ]: [JS_GLOBAL, camelCaseDash( _ )] } } ), {} );
const handleMap = packages.reduce( ( acc, _ ) => ( { ...acc, ...{ [ SCOPE + _ ]: WP_HANDLE_PREFIX + _ } } ), {} );

const requestToExternal = ( request ) => {
	if ( depMap[ request ] ) {
		return depMap[ request ];
	}
};

const requestToHandle = ( request ) => {
	if ( handleMap[ request ] ) {
		return handleMap[ request ];
	}
};

const getEntryPoints = () => {
	const entryPoints = {};
	packages.forEach( ( name ) => {
		entryPoints[ name ] = {
			import : rootDirResolve( `node_modules/${SCOPE}${name}/build-module/index.js` ),
			library: {
				name: [JS_GLOBAL, camelCaseDash( name )],
				type: 'window'
			}
		};
	} );
	return entryPoints;
};

module.exports = {
	...defaultConfig,
	entry  : getEntryPoints(),
	output : {
		devtoolNamespace: NAMESPACE,
		path            : DIST_PATH,
		filename        : "[name]/index.js"
	},
	plugins: [
		...defaultConfig.plugins.filter( ( plugin ) => plugin.constructor.name !== 'DependencyExtractionWebpackPlugin' ),
		new DependencyExtractionWebpackPlugin( { injectPolyfill: true, requestToExternal, requestToHandle } )
	]
};
