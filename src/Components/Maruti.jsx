
import './Maruti.css'
import img1 from '../assets/profile.png'
import img2 from '../assets/kaadu.jpg'
import img3 from '../assets/james.webp'
import img4 from '../assets/1920.jpg'
import img5 from '../assets/bac.jpg'
function Maruti() {
 

  return (
    <>
   <div className='main'>
    <div  className='top'>
        <div className='t-l'>
            <div className='t-t'><h4>Admin  Dashboard</h4></div>
            <div className='t-b'>Welcome, Admin</div>
        </div>
        <div className='t-r'><img src={img1} alt=""className='trr' /></div>
    </div>
    <div className='middle'>
      <div className='m-l'>
        <button>All Movies(10)</button>
      </div>
      <div className='m-m'>
        <button>Pending(8)</button>
      </div>
      <div className='m-r'>
        <button>Rejected(2)</button>
      </div>
    </div>
    <div className='bottom'>
      <div className='b-t'>
        <div className='bt-1'>APPROVED MOVIES</div>
        <div className='bt-2'> 
          <div className='bt22'></div>
        </div>
      </div>
      <div className='b-b'>
        <div className='b-l'>
          <div className='bl-t'>
            <div className='blt-1'><img src={img2} alt=""className='p' /></div>
            <div className='blt-2'><b>Anathan Kaadu</b></div>
            <div className='blt-3'>
              <div className='blt3-1'>
                <button>2023</button>
              </div>
              <div className='blt3-2'>
                <button>English</button>
              </div>
            </div>
            <div className='blt-4'>A Viking prince seeks revenge.</div>
          </div>
          <div className='bl-b'>
            <div className='blb-1'><img src={img4} alt=""className='p1' /></div>
            <div className='blb-2'><b>1920</b></div>
            <div className='blb-3'>
              <div className='blb3-1'>
                <button>2022</button>
              </div>
              <div className='blb3-2'>
                <button>English</button>
              </div>
            </div>
            <div className='blb-4'>A Viking prince seeks revenge.</div>
          </div>
        </div>
        <div className='b-r'>
          <div className='br-t'>
            <div className='brt-1'><img src={img3} alt=""className='p2' /></div>
            <div className='brt-2'><b>James</b></div>
            <div className='brt-3'>
              <div className='brt3-1'>
                <button>2026</button>
              </div>
               <div className='brt3-2'>
                <button>English</button>
               </div>
            </div>
            <div className='brt-4'>A Viking prince seeks revenge.</div>
          </div>
          <div className='br-b'>
             <div className='brb-1'><img src={img5} alt=""className='p3' /></div>
            <div className='brb-2'><b>ong bac</b></div>
            <div className='brb-3'>
              <div className='brb3-1'>
                <button>2022</button>
              </div>
               <div className='brb3-2'>
                <button>English</button>
               </div>
            </div>
            <div className='brb-4'>A Viking prince seeks revenge.</div>
          </div>
        </div>
      </div>
    </div>
   </div>
    </>
    
  )
}

export default Maruti
