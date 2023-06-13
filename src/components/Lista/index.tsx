import { ITarefa } from '../../Types/tarefa';
import style from './style.module.scss'

interface Props {
    tarefas: ITarefa[];
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

function Lista ({tarefas, selecionaTarefa}:  Props) {
   
    return ( 
        <aside className={style.listaTarefas}>
            <h2>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <li 
                    key={item.id} 
                    className={`${style.item} ${ item.selecionado ? style.itemSelecionado : ''} ${item.completado? style.itemCompletado : ''}`}
                    onClick={()=>!item.completado && selecionaTarefa(
                        item
                    )}
                    >
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                        {item.completado && <span className={style.concluido} aria-label='tarefa completada'></span>}
                    </li>
                ))}
            </ul>
        </aside>
     );
}
 
export default Lista;