// create the actual socket


'use strict';

const
    { spawn } = require( 'child_process' ),
    ls = spawn( 'muse-io ', [ '--osc', 'osc.tcp://localhost:6000' ] ); //--osc osc.tcp://localhost:6000

ls.stdout.on( 'data', data => {
    console.log( `stdout: ${data}` );
} );

ls.stderr.on( 'data', data => {
    console.log( `stderr: ${data}` );
} );

ls.on( 'close', code => {
    console.log( `child process exited with code ${code}` );
} );