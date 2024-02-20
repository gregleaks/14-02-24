import {
    txtLogin,
    txtSenha
} from '../App'

var login = "teste";
var senha = "teste";

export const fazerLogin = (e) => {
    if (txtLogin.current.value === login && txtSenha.current.value === senha ) {
        console.log("Acesso Liberado");
    } else {
        console.log("Login ou senha inválidos");
    }
}
