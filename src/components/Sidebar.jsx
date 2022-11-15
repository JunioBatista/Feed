import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="cover-photo" 
            />

            <div className={styles.profile}>
                <img 
                    className={ styles.avatar } 
                    src="https://github.com/JunioBatista.png" alt="minha foto de perfil" 
                />
                <strong> Junio Batista da Silva</strong>
                <span> Fullstack developer </span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size="20" />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}