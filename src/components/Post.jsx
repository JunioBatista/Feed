import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar image="https://github.com/JunioBatista.png"/>
                    <div className={styles.authorInfo}>
                        <strong> Junio Batista </strong>
                        <span> Full Stack Developer </span>
                    </div>
                </div>
                <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30"> Publicado há 1h </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifolio.</p>

                <p><a href="#">👉 https://github.com/JunioBatista </a></p>

                <p>
                    <a href="#">#novoprojeto</a> {' '}
                    <a href="#">#dev</a>{' '}
                    <a href="#"> #frontend</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong> Deixe seu feedback </strong>
                <textarea
                    placeholder='Deixe um comentário' 
                />
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}