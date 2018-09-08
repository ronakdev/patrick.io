// look to listen for things 

'use strict';

const
    { spawn } = require( 'child_process' ),
    ls = spawn( 'muse-player', [ '-l', '6000' ] );

ls.stdout.on( 'data', data => {
    console.log( `stdout: ${data}` );
} );

ls.stderr.on( 'data', data => {
    console.log( `stderr: ${data}` );
} );

ls.on( 'close', code => {
    console.log( `child process exited with code ${code}` );
} );