import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps{
    content: string,
    onDeleteComment: (comment: string) => void
}


export function Comment({ content, onDeleteComment } : CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }


    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/claudioalberto.png"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Claudio Alberto</strong>
                            <time title="11 de maio às 8:13h" dateTime='2022-05-11 08:13:00'>Cerca de 1h atrás</time>
                        </div>
                        <button
                            title='Deletar'
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}><ThumbsUp />Aplaudir <span>{likeCount}</span></button>
                </footer>
            </div>
        </div>
    )
}