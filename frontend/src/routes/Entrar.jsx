import { Link } from 'react-router-dom'

export default function Entrar() {
    return (
        <div>
            <h1>Tela de entrar</h1>
            <form action="/verificar" method='post'>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome" placeholder="Ex: João Silva" /><br /><br />
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="senha" id="senha" placeholder="Ex: 123456789"/><br /><br />
                <input type="submit" value="Entrar" />
                <Link to="/"><input type="button" value="Voltar" /></Link>
            </form>
        </div>
    )
}