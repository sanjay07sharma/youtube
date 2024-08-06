import React, { useEffect } from 'react'
import { SUBSCRIPTION_URL } from '../utils/constant';

const Subscriptions = () => {
    const pathName = window.location.pathname;
    const getSubscription = async () => {
        const subscriptionData = await fetch(SUBSCRIPTION_URL);
        const json = await subscriptionData.json();
        console.log(json);
    }
    useEffect(() => {
        getSubscription();
    },[])
  return (
    <div>
        Channnel Page Here
    </div>
  )
}

export default Subscriptions
