const header = '[TSD-JSDoc]';

let isVerbose = false;

export function setVerbose(value: boolean)
{
    isVerbose = value;
}

export function warn(msg: string, data?: any)
{
    if (typeof(console) === 'undefined')
        return;

    console.warn(`${header} ${msg}`);

    if (isVerbose && arguments.length > 1)
    {
        console.warn(data);
    }
}

let isDebug = false;

export function setDebug(value: boolean)
{
    isDebug = value;
}

export function debug(msg: string, data?: any)
{
    if (typeof(console) === 'undefined')
        return;

    if (isDebug) {
        console.log(`${header}   ${msg}`);
        if (arguments.length > 1)
        {
            console.log(data);
        }
    }
}

export function docletDebugInfo(doclet: TAnyDoclet) : string {
    return `{longname='${doclet.longname}', kind='${doclet.kind}'}`;
}
