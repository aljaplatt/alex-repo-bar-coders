import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import image from '../images/projeto-o-fn--TuQvBZ0-unsplash.jpg'


export default function Home() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.image}>
        <Image
          // src="https://images.unsplash.com/photo-1635648116223-bce260c0dc1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          src={image.src}
          alt="space"
          width={600}
          height={750}
        />
      </div>
      <div className={styles.rightSide}>
        <h1>Book Worms</h1>
        <h2>Login</h2>
        <input placeholder="username" />
        <input type="password" placeholder="password" />
        <div className={styles.Buttons}>
        <Link href="/studenthome" passHref>
        <button>I&apos;m a student</button>
        </Link>
         
          <button>I&apos;m a teacher</button>
        </div>
      </div>
    </div>
  );
}
