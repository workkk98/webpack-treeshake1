import { getUserName } from "./user-library";
import { join } from 'lodash-es'

console.log(getUserName());


console.log(join([getUserName(), getUserPhoneNumber()]))