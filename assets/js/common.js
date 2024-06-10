ascii = `%c

╭╮╭╮╭╮╱╱╭╮
┃┃┃┃┃┃╱╱┃┃
┃┃┃┃┃┣━━┫┃╭━━┳━━┳╮╭┳━━╮
┃╰╯╰╯┃┃━┫┃┃╭━┫╭╮┃╰╯┃┃━┫
╰╮╭╮╭┫┃━┫╰┫╰━┫╰╯┃┃┃┃┃━┫
╱╰╯╰╯╰━━┻━┻━━┻━━┻┻┻┻━━╯`


function displayMessage() {

let baseTimestamp = new Date(Date.UTC(2069, 12, 12, 12, 59, 59, 999));


    let coolSymbol = "☆";

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    let formattedDate = baseTimestamp.toLocaleDateString('en-US', options);

    console.clear();
    console.info('\n');
    console.info(ascii, `font-family:monospace; color: rgba(0, 255, 0, 0.51);padding-block:0px;padding-left:80px;`);

    console.info('\n');
    console.info('%c hello it is the index page',`line-height:13px;padding-block:0px;padding-left:100px;background-repeat:no-repeat; text-shadow: 0 0 3px #fff, 0 0 1px #fff, 0 0 1px #00ff33, 0 0 1px #00ff33, 0 0 2px #00ff33`);
    console.info('%c go here',`line-height:13px;padding-block:0px;padding-left:100px;background-repeat:no-repeat; text-shadow: 0 0 3px #fff, 0 0 1px #fff, 0 0 1px #00ff33, 0 0 1px #00ff33, 0 0 2px #00ff33`);
    console.info('%c>> https://hkeylocalmachine.github.io/pokes/54ea5b026adf839431ea8985d6ad34b6.html <<',`line-height:10px;padding-block:0px;padding-left:130px;background-repeat:no-repeat; text-shadow: 0 0 3px #fff, 0 0 1px #fff, 0 0 1px #00ff33, 0 0 1px #00ff33, 0 0 2px #00ff33`);
    console.info('%c to start challenge',`line-height:13px;padding-block:0px;padding-left:100px;background-repeat:no-repeat; text-shadow: 0 0 3px #fff, 0 0 1px #fff, 0 0 1px #00ff33, 0 0 1px #00ff33, 0 0 2px #00ff33`);
    console.info('%c' + formattedDate,`color: rgba(0, 0, 0, 0.3);font-size: 9px;line-height:100px;padding-block:0px;padding-left:180px;background-repeat:no-repeat;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 300 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E @keyframes swapText %7B 0%25, 49.999%25 %7B opacity: 0; %7D 50%25, 100%25 %7B opacity: 1; %7D %7D text %7B animation: swapText 2s linear infinite; %7D text:nth-child(2) %7B animation-delay: 1s; %7D @media (prefers-color-scheme: dark) %7B text %7B fill: white; %7D %7D %3C/style%3E%3Ctext text-anchor='end' font-size='15' x='80' y='200'%3E ☆ %3C/text%3E%3Ctext text-anchor='end' font-size='11' x='200' y='80'%3E ☆ %3C/text%3E%3C/svg%3E")`);

}


function getMetaTags() {
let creationDate;

    let metaElements = document.querySelectorAll('meta');
     metaElements.forEach(meta => {
     if (meta.getAttribute('name') === 'date') {
            creationDate = meta.getAttribute('content');

            let unixTimestamp = new Date(creationDate).getTime();
            let unixTimestampInSeconds = unixTimestamp / 1000;
            dbg = creationDate + ' to ' + unixTimestampInSeconds
            console.info(`%c${dbg}`,`color: white;` )
        }
        });
 }





