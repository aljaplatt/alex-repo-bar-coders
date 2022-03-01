import React from 'react'
import styles from '../../../styles/Navbar.module.css'
import Link from 'next/link';
import Image from 'next/image';
import bookwormicon from '../../../images/bookwormicon.png'
import newmessageicon from '../../../images/newmessageicon.png'
import messagesicon from '../../../images/messagesicon.png'

function Navbar({isNewMessage, studentName}) {

    


  return (
    <div className={styles.navbar}>
      <div className={styles.student}>
        {/* <img src="https://cdn-icons-png.flaticon.com/512/2490/2490295.png"></img> */}
        <Image src={bookwormicon.src} alt="icon" width="60px" height="60px" />
        <h1>{studentName}</h1>
      </div>

      <Link href="/studenthome" passHref>
        <button>Home</button>
      </Link>
      <Link href="/dictionary" passHref>
        <button>Dictionary</button>
      </Link>
      <Link href="/finishedbooks" passHref>
        <button>Finished Books</button>
      </Link>

      {isNewMessage && (
        /* <img src="https://cdn-icons-png.flaticon.com/512/6875/6875112.png"></img> */
        <Link href="/messages" passHref>
          <Image
            src={newmessageicon.src}
            alt="icon"
            width="60px"
            height="60px"
          />
        </Link>
      )}
      {!isNewMessage && (
        /* <img src="https://cdn-icons-png.flaticon.com/512/6875/6875170.png"></img> */
        <Link href="/messages" passHref>
          <Image src={messagesicon.src} alt="icon" width="60px" height="60px" />
        </Link>
      )}
      <Link href="/" passHref>
        <button className={styles.logoutbutton}>Log Out</button>
      </Link>
    </div>
  );
}

export default Navbar