/**default parameter use korche jokhon ar kaj jody kno karone kno 
parameter na dewa hoi taile defaults nia nibe like (nam2 = 0)*/

function add ( nam1, nam2 = 0){

    return nam1 + nam2
}
const total = add(15, 10);
console.log(total);