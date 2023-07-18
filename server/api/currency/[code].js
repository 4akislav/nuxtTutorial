export default defineEventHandler(async (event) => {
    
    const { code } = event.context.params
    const { cuttencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apiKey=${cuttencyKey}`

    const { data } = await $fetch(uri)

    return data
})