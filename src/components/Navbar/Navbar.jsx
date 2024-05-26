import getPostMetadata from '@/utils/getPostMetadata';
import styles from './Navbar.module.scss';

const Navbar = () => {
    const posts=getPostMetadata();
    // console.log(posts);
    return ( 
        <nav className={styles.Navbar} >
            <h1>Sahin&apos;s Blog</h1>
            <input type="text" placeholder="search..."/>
        </nav>
     );
}
 
export default Navbar;