function capitalizeWords (a){
return ( a[0].toUpperCase() + a.substring (1,5) + " " +  a[6].toUpperCase() + a.substr(7,1) + " " + a[9].toUpperCase()  + a.substr(10,4) + " " + a[14].toUpperCase() + a.substr(15,2) + " " + a[17].toUpperCase() + a.substr(18,4))
}
console.log(capitalizeWords("hello my name is nika"))