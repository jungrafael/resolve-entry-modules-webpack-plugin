const EntryResolvePlugin = require( '../../' );

class SilentOutputPlugin {
	apply( compiler ) {
		compiler.plugin( 'should-emit', () => false );
	}
}

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	plugins: [
		new EntryResolvePlugin(),
		new SilentOutputPlugin()
	]
};
