self.addEventListener('message',(event) => {
    let data = event.data??"id"
    if (data == "__done"){
        self.postMessage("__done")
        return
    }
    result = oneSecDelay(data)
    self.postMessage(result)
})

function oneSecDelay(id="id"){
    let startTime=performance.now()
    for(let x=0;x<2000000000;x+=1){}
    let endTime=performance.now()
    console.log(`${id}: ${endTime-startTime}`)
    return(`${id}: ${endTime-startTime}`)
}