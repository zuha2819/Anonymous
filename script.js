let user = prompt(' email kiriting')
let y = run (1000,9999)
let password = prompt('siz uchun xos raqam' + y)

password == y ? alert(' Anonymousga oilasiga xush kelibsiz') : alert('xato')






function run(max, min){
    return Math.floor(Math.random () * (max-min +1) + min)
}
