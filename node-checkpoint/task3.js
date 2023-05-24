const fs=require('fs')


fs.writeFile('welcome.txt' , 'Hello Node' , (err)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log ('file created successfully')
})

fs.readFile('welcome.txt' , 'utf8' , (err,data)=>
{
    if (err) {
        console.log (err)
        return
    }
    console.log(data)
})
