let subs: number | string = '1M';

let apiReq: 'pending' | 'success' | 'error' = 'pending';

apiReq = 'pending'

const orders = ['12', '20', '65'];

let currOrders: string | undefined;

for(let order of orders){
    if(order === '12'){
        currOrders = order;
        break;
    }
    currOrders = '0';
}

console.log(currOrders);

// here try to ignore 'any' datatype 