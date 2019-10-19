// tree-shaking 只支持 ES module（静态），不支持 CommonJS（动态）

import { add } from './math'

alert(add(1, 2))