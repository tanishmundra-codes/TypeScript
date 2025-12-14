function getChai(kind : string | number){
    if(typeof kind == 'string'){
        return `${kind} data type.`;
    }

    return `${kind} data type.`;
}

console.log(getChai("String"));

// Can create custom type using 'type' keyword
type ChaiOrder = {
    type: string
    sugar : number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}