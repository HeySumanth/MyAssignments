let a="madam"
// let b=a.split('')
let c=a.length
let d=""

for (let i=c;i>=0;i--)
{
    d=d+a.charAt(i)

}

console.log(d)

if (d==a)
{
    console.log("It’s a palindrome!")
}

else
{
    console.log("It’s not a palindrome!")

}
