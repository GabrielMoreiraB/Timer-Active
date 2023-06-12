import { ITarefa } from '../../Types/tarefa';
import style from './style.module.scss'


function Lista ({tarefas}: {tarefas: ITarefa[]}) {
   
    return ( 
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
     );
}
 
export default Lista;