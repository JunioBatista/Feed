import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="cover-photo" 
            />

            <div className={styles.profile}>
                <Avatar image="https://github.com/JunioBatista.png"/>
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