import Styles from '@/styles/Home.module.css';

const info = () => {
 return (
  <>
  <div >
   <img
    src="/sd.jpeg"
    alt="Your profile picture"
    className={Styles.profilePic}
   />
</div>
   <div className={Styles.p}>
   <p>
             " Welcome to my domain of stories and imagination! I'm Sagar, a word smith, and I'm thrilled to have you here. You won't find a vast collection of stories, but only a **select few** you can count on your fingers. Still, give them a try! Who knows? You might just get some inspiration to write your own story. "
   </p>
 
   </div>
  </>
 );
};

export default info;
