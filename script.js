function getFormvalue(e) {
    //Write your code here
	 e.preventDefault()
    const fname=e.target[0].value
	const lname=e.target[1].value
	alert(`${fname} ${lname}`)
}
const container=document.getElementById("form1")
container.addEventListener("submit",getFormvalue)
