'use client'
import styles from './page.module.css';
import { useState } from 'react';
import Link from 'next/link';



const initialSetup: React.FC = () => {



    const Items: string[] = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam est.11',
        'Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione.10',
        'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.9'
    ]


    const [item, setItem] = useState<string>(Items[0]);
    const [peopleCount, setPeopleCount] = useState<number>(50);

    const countPlusHandler  = () => {
        if (peopleCount === 50) {
            setPeopleCount(peopleCount + 1)
        }
    }
    const countMinusHandler  = () => {
        if (peopleCount === 51) {
            setPeopleCount(peopleCount - 1)
        }
    }

    const itemHandler = (num: number) => {
        setItem(Items[num])
    }



    return (
        <section className={styles.window}>
            <input type="text" placeholder='Поиск...'/>
            <section className={styles.main}>
               <article>
                    <h1>Первичная настройка</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis minima necessitatibus ducimus illo sed quo deserunt excepturi sunt non enim inventore aliquam esse asperiores ea dolorem quibusdam labore quos facere iusto, obcaecati doloremque aliquid est.</p>
                    <div>
                        <p>Рекомендации:</p>
                        <p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Fugiat.</p>
                    </div>
               </article>
               <article>
                    <h1>Начало работы</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt, iste animi, quia numquam, rerum veritatis itaque tempore facilis repellendus harum reiciendis.</p>
                    <section className={styles.items}>
                        <section><p className={styles.number}>1</p> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat, voluptatem repellat provident, pariatur.</p></section>
                        <section><p className={styles.number}>2</p> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat, voluptatem repellat provident, pariatur.</p></section>
                        <section><p className={styles.number}>3</p> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat, voluptatem repellat provident, pariatur.</p></section>
                    </section>
               </article>
               <article>
                    <h1>Дополнительная информация</h1>
                    <nav>
                        <button onClick={() => itemHandler(0)} style={{'color': `${item === Items[0] ? '#1E5EFF' : ''}`, 'borderBottom': `${item === Items[0] ? '2px solid #1E5EFF' : ''}`}}>Пункт 11</button>
                        <button onClick={() => itemHandler(1)} style={{'color': `${item === Items[1] ? '#1E5EFF' : ''}`, 'borderBottom': `${item === Items[1] ? '2px solid #1E5EFF' : ''}`}}>Пункт 10</button>
                        <button onClick={() => itemHandler(2)} style={{'color': `${item === Items[2] ? '#1E5EFF' : ''}`, 'borderBottom': `${item === Items[2] ? '2px solid #1E5EFF' : ''}`}}>Пункт 9</button>
                    </nav>
                    <section className={styles.itemText}>
                        <p>{item}</p>
                    </section>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, doloribus, nulla. Soluta error repudiandae cumque veniam fugiat.</p>
               </article>
               <article>
                    <h1>Вам помогла эта статья?</h1>
                    <section className={styles.btns}>
                        <button onClick={countPlusHandler}>Да</button>
                        <button onClick={countMinusHandler}>Нет</button>
                    </section>
                    <h5 className={styles.people}>{peopleCount} людям помогла эта статья</h5>
               </article>
            </section>
            <section className={styles.footer}>
                <div>
                    <h1>Сообщество GB</h1>
                    <p>Обращайтесь за помощью к членам сообщества, задавайте любые вопросы и получайте ответы.</p>
                    <Link href={'#'}>Присоединиться к сообществу</Link>
                </div>
                <div>
                    <h1>GB Connect</h1>
                    <p>Пользуйтесь всеми возможностями GB. Пройдите регистрацию в GB Connect.</p>
                    <Link href={'#'}>Регистрация</Link>
                </div>
            </section>
        </section>
    )
}

export default initialSetup;