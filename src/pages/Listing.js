import Image from 'next/image'
import Styles from '@/styles/Listing.module.css'
import Stove from "../.././public/1.jpg";
import Village from "../../public/Village.jpeg"
import survival from "../../public/survival.jpg"
import Link from 'next/link'

const Listing = () => {
 return (
  <>
   <h1 className={Styles.V}>Posts</h1>
   <h2 className={Styles.post}></h2>
   <div className={Styles.container}>
    <div className={Styles.item}>
     <Link href='/components/TheVillage'>

      <div className={Styles.image}>
       <Image src={Village} alt="Village" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>The Cursed Village</h2>
        <p>
         Akira who loves adventure, set out to explore the village deep within the jungle. As he explore further he come across the dark secrets of the village and some strange powers. To save others lives, Akira put his own life at risk. The adventures and fearful experiences in the village gives him new prespective to his life.
        </p>
       </div>
      </div>

     </Link>
    </div>

    <div className={Styles.item}>
     <Link href='/components/SurvivingTogether'>
      <div className={Styles.image}>
       <Image src={survival} alt="survival" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Surviving Together</h2>
        <p>
         The War has wiped out majority of the human population. Those who lived, struggling to survived. Jona's leading the group of people with his trustworthy friend Mark. They come across with many obstacles to reach their final destination.
        </p>
       </div>
      </div>
     </Link>
    </div>
    <div className={Styles.item}>
     <Link href='/components/TrapHouse'>
      <div className={Styles.image}>
       <Image src={Stove} alt="A Tale of Plague Innocence" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Trap House</h2>
        <p>
        Haru tired of traveling decides to rest at the abandoned house. Unaware of its history, he face unexpected future alongside three sisters. The reality of time for him is infinite. Which he never finds out.  
        </p>
       </div>
      </div>
     </Link>
    </div>
    <div className={Styles.item}>
     <Link href='/components/VacationtotheUnknown'>
      <div className={Styles.image}>
       <Image src={Stove} alt="Rise of the tomb raider" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Vacation to the Unknown</h2>
        <p>Shin, a young man is on a trip with strange people, but soon he become good companion with others. Seeking for new adventure and experience as long as he is with his newly made friends. </p>
       </div>
      </div>
     </Link>
    </div>

   </div>
  </>
 )
}

export default Listing