import React from 'react';

// demo.propTypes = {

// };

function Demo() {
    function scaryClown() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('🤡');
            }, 2000);
            console.log('timeout done');
        });
    }

    async function msg() {
        var time1 = new Date().getTime();
        let msg = await scaryClown();
        var time2 = new Date().getTime();
        console.log(`fetch 1: ${msg} ${time2 - time1}`);

        msg = await scaryClown();
        console.log(`fetch 2: ${msg} ${new Date().getTime() - time1}`);
        // return msg;
    }

    
    async function msg1() {
        var time1 = new Date().getTime();
        let f1 = scaryClown();
        let f2 = scaryClown();

        var time2 = new Date().getTime();
        let msg = await f1;
        console.log(`fetch 1: ${msg} ${time2 - time1}`);

        msg = await f2;
        console.log(`fetch 2: ${msg} ${new Date().getTime() - time1}`);
        // return msg;
    }
    msg1();

    // b.then(x => console.log(x));

    return (
        <div id="appss">
            <span>Testting</span>
        </div>
    );
}

export default Demo;

