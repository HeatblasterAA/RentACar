import React, { useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars } from '../redux/actions/carsActions'


function Home() {
    const {cars} = useSelector(state=>state.carsReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllCars())
    },[])

    return (
        <DefaultLayout>
            <h1>Home Page</h1>
            <h1>The length of cars array is {cars.length}</h1>
        </DefaultLayout>
    )
}

export default Home