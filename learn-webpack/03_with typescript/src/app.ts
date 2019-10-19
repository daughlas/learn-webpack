
const NUMBER = 45;
import * as _ from 'lodash';

interface Cat {
    name: string;
    sex: string;
}

function touchCat(cat: Cat) {
    console.log('miao ~', cat.name)
}

touchCat({
    name: 'hello',
    sex: 'boy'
})

console.log(_.chunk([1, 2, 3, 4, 5], 2));
