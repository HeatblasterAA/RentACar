import React, { useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'
import { Button, Flex ,Row , Col } from 'antd';
import Spinner from '../components/Spinner';

function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCars())
    },[])

    return (
        <DefaultLayout>
           
            {loading == true && (<Spinner/>) }

           <Row justify='center' gutter={16} className='mt-5'>

                {cars.map(car=>{
                    return <col lg={5} sm={24} xs={24}> 
                    <div className="car p-2 bs1 mt-3">
                        <img src={car.image} className="carimg"/>

                        <div className="car-content d-flex align-item-center justify-content-between">

                             <div>
                                <p>{car.name}</p>
                                <p>{car.rentPerHour} Rent Per Hour /-</p>
                             </div>

                             <div>
                                <button className="btn1 mr-2">Book Now</button>
                             </div>

                        </div>
                    </div>
                    </col>
                })}

           </Row>

        </DefaultLayout>
    )
}

export default Home

//lg , sm , xs are the devices and we are putting size of gride for compibility
// p-2 and bs1 is for padding and bodyShadow & mt-3 for margin
// gutter is in place of margin i.e col space = 16 px