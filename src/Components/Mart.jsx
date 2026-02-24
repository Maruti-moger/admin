import './Mart.css'
import img6 from '../assets/kaadu1.jpg'
import img7 from '../assets/star.png'
import img8 from '../assets/left1.png'
function Mart() {
 

  return (
    <>
  <div className='main'>
    <div className='top'><img src={img6}alt=""className='l1' />
    <div className='t-1'><img src={img8} alt="" className='l2' /></div>
    <div className='t-2'>Anathan kaadu</div>
    <div className='t-3'>English .1h 40min</div>
    </div>
    <div className='middle'>
        <div className='m-t'>
    <div className='mt-1'>
        <button><img src={img7} alt="" className='l2' />6.2</button>
    </div>
    <div className='mt-2'>
        <button>1h 40min</button>
    </div>
    <div className='mt-3'>
        <button>English</button>
    </div>
    <div className='mt-4'>
        <button>6+</button>
    </div>
        </div>
        <div className='m-b'>
            <div className='mb-1'><b>Synopsis</b></div>
            <div className='mb-1'>A Viking prince seeks revenge</div>
        </div>
    </div>
    <div className='bottom'>
        <div className='b-t'><b>Movie Info</b></div>
        <div className='b-b'>
            <div className='bb-l'>
                <div className='bbl-t'>
                    <div className='bblt-1'>Release Date</div>
                     <div className='bblt-2'>22 Apr 2022</div>
                </div>
                 <div className='bbl-b'>
                    <div className='bblb-1'>Duration</div>
                      <div className='bblb-2'>1h 40min</div>
                 </div>
            </div>
             <div className='bb-r'>
                <div className='bbr-t'>
                    <div className='bbrt-1'>Language</div>
                    <div className='bbrt-1'>English</div>
                </div>
                <div className='bbr-b'>
                    <div className='bbrb-1'>Status</div>
                     <div className='bbrb-2'>Released</div>
                </div>
             </div>
        </div>
    </div>
    <div className='footer'>
        <div className='f-t'><b>Prodution</b></div>
        <div className='f-b'>
            <div className='fb-1'>Prodution by:ABC Productions</div>
            <div className='fb-2'>Distributed by: Namma Cinema</div>
        </div>
    </div>
  </div>
    </>
    
  )
}
export default Mart
