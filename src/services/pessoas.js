import { http } from './config';

export default {
    lista:() => {
        return http.get('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person');
    }
}






