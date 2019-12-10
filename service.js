import axios from 'axios'

async function getUsers(){
    try {
        const response = await axios.get('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person');

        return response.data;
        

    } catch (error) {
        // console.error('Ops', error);
    }
}

getUsers();

async function postUsers(usuarioNome, usuarioEmail){
    
    axios.post('http://5c9d09be3be4e30014a7d331.mockapi.io/nofaro/api/v1/person', {

        nome: usuarioNome,
        email: usuarioEmail
    })
    .then(function(response){   
        return response
    })
    .catch(function(error){
        return error
    });

}

postUsers();


