import styles from './Header.module.css';
import logo from './../../images/logo.svg';
import Image from 'next/image';
import search from './../../images/search.svg';
import messages from './../../images/messages.svg';
import notices from './../../images/notices.svg';
import avatar from './../../images/avatar.png';
import detArrow from './../../images/datArrow.svg';



const Header: React.FC = () => {





    return (
        <header className={styles.window}>
            <section>
                <div className={styles.logo}>
                    <Image src={logo} alt='' width={40} height={40}/> <h1>GB Adviser</h1>
                </div>
                <div className={styles.Inpt}>
                  <Image src={search} alt='' width={24} height={24}/>  <input type="" placeholder='Поиск...'/>
                </div>
            </section>
            <section className={styles.info}>
                <Image src={messages} alt='' width={24} height={24}/>
                <div className={styles.notices}><Image src={notices} alt='' width={24} height={24}/><p className={styles.sup}>5</p></div>
                <div className={styles.profile}>
                    <Image src={avatar} alt='' width={40} height={40}/>
                    <h4>
                        Саша Смелая
                    </h4>
                    <Image src={detArrow} alt='' width={24} height={24}/>
                </div>
            </section>
        </header>
    )
}


export default Header;