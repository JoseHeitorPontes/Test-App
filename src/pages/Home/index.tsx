import { Link } from "react-router";

import "./styles.css";

export function Home() {
    return (
        <div className="w-100 p-4">
            <Link to="/novo-paciente" id="new-patient">Novo Paciente</Link>
        
            <table id="patients-table" className="mt-4">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Idade</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td colSpan={12} className="text-center text-gray">Nenhum paciente cadastrado</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}