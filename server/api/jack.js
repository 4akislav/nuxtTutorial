export default defineEventHandler(async (event) => {

    // // handle query params
    // const { name } = useQuery(event)

    // //handle post data
    // const { age } = await useBody(event)

    // api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_dRYLRJIUfQDklnfpQfODhK50wc6owOssjFnPmN1t&currencies=EUR%2CUSD%2CCAD')

    return data
    
})