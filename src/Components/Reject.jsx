import './Reject.css'
import img11 from '../assets/profile.png'
import img12 from '../assets/kabzaa.jpg'
import img14 from '../assets/kirik.avif'
function Reject() {


    return (
        <>
            <div className='main'>
                <div className='top'>
                    <div className='t-l'>
                        <div className='tl-t'><b>Admin Dashboard</b></div>
                        <div className='tl-b'>Welcome,Admin!</div>
                    </div>
                    <div className='t-r'><img src={img11} className='p1' /></div>
                </div>
                <div className='middle'>
                    <div className='m-1'>
                        <button>All Movies (10)</button>
                    </div>
                    <div className='m-2'>
                        <button>Pending (8)</button>
                    </div>
                    <div className='m-3'>
                        <button>Rejected (2)</button>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='b-t'>
                        <div className='bt-1'><span className='sp'>REJECTED MOVIES</span></div>
                        <div className='bt-2'>
                            <div className='bt22'></div>
                        </div>
                    </div>
                    <div className='b-b'>
                        <div className='bb-l'>
                            <div className='bbl-t'>
                                <div className='bblt-t'>
                                    <div className='bbltt-1'><img src={img12} className='p2' /></div>
                                </div>
                                <div className='bblt-b'>
                                    <div className='bbltb-1'>Kabza</div>
                                    <div className='bbltb-2'>
                                        <div className='b2-1'>
                                            <button>2022</button>
                                        </div>
                                        <div className='b2-2'>
                                            <button>English</button>
                                        </div>
                                    </div>
                                    <div className='bbltb-3'>A Viking prince seeks revenge.</div>
                                   <div className='bbltb-4'>
                                    <span className='bbl-44'>Reason:</span>
                                    <p className='bbl-55'>improper content</p>
                                   </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='bb-r'>
                            <div className='bbr-t'>
                                <div className='bbrt-t'>
                                    <div className='bbrtt-1'><img src={img14} className='q2' /></div>
                                </div>
                                <div className='bbrt-b'>
                                    <div className='bbrtb-1'><b>Kirik party</b></div>
                                    <div className='bbrtb-2'>
                                        <div className='bp2-1'>
                                            <button>2026</button>
                                        </div>
                                        <div className='bp2-2'>
                                            <button>English</button>
                                        </div>
                                    </div>
                                    <div className='bbrtb-3'>A Viking prince seeks revenge.</div>
                                    <div className='bbltb-4'>
                                    <span className='bbl-44'>Reason:</span>
                                    <p className='bbl-55'>improper content</p>
                                   </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Reject
