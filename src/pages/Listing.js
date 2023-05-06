import Image from 'next/image'
import Styles from '@/styles/Listing.module.css'
import Stove from "../.././public/1.jpg";
import Village from "../../public/Village.jpeg"
import survival from "../../public/survival.jpg"
import trap from "../../public/trap.jpg"
import oasis from "../../public/oasis.jpg"
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
         Akira, who loves adventure, sets out to explore a village deep within the jungle. As he explores further, he comes across the dark secrets of the village and some strange powers. To save others' lives, Akira puts his own life at risk. The adventures and fearful experiences in the village give him a new perspective on his life.
        </p>
       </div>
      </div>

     </Link>
    </div>

    <div className={Styles.item}>
     <Link href='/components/SurvivingTogether'>
      <div className={Styles.image}>
       <Image src={survival} alt="deserted city" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Surviving Together</h2>
        <p>
         The war has wiped out the majority of the human population. Those who survived are struggling to stay alive. Jona is leading a group of people with his trustworthy friend Mark. They come across many obstacles on their journey to reach their final destination.
        </p>
       </div>
      </div>
     </Link>
    </div>
    <div className={Styles.item}>
     <Link href='/components/TrapHouse'>
      <div className={Styles.image}>
       <Image src={trap} alt="house" width={500} height={300} priority />
       <div className={Styles.overlay}>
        <h2>Trap House</h2>
        <p>
         Haru, tired of traveling, decides to rest at an abandoned house. Unaware of its history, he faces an unexpected future alongside three sisters. The reality of time for him is infinite, which he never finds out.
        </p>
       </div>
      </div>
     </Link>
    </div>
    <div className={Styles.item}>
     <Link href='/components/VacationtotheUnknown'>
      <div className={Styles.image}>
       <Image src={oasis} alt="oasis" width={500} height={300} priority />
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