let args = process.argv

console.log(args.slice(2))

args = args.slice(2)
if (args[0]) {
    console.log('got args:',args[0])
}
if (args[1]) {
    console.log('got args:',args[1])
}else{
    console.log('got nothing');
}