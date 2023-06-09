import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss'
import { ITarefa } from "../../Types/tarefa";
import { v4 as uuidv4 } from 'uuid';



class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa:'',
        tempo: '00:00:00'
    }
    adicionarTarefa(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [...tarefasAntigas, 
                {... this.state,
                    selecionado: false,
                     completado: false,
                     id: uuidv4()
                }]);
        this.setState({
            tarefa: '',
            tempo: '00:00:00',
        })
    }

    render() {
        return (
            <form className={style.novaTarefa}
            onSubmit={this.adicionarTarefa.bind(this)}
            >
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione uma nova tarefa</label>
                    <input 
                    type="text" 
                    name="tarefa" 
                    value={this.state.tarefa}
                    onChange={(e)=>this.setState({ ... this.state, tarefa: e.target.value})}
                    id="tarefa" 
                    required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                    type="time" 
                    step='1'
                    required
                    value={this.state.tempo}
                    onChange={(e)=>this.setState({ ... this.state, tempo: e.target.value})}
                    name="tempo" 
                    id="tempo" 
                    min='00:00:00'
                    max='01:30:00'
                    />
                </div>
                <Botao type='submit'>Adicionar</Botao>
            </form>
        )
    }
}

export default Formulario;