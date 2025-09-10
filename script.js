function getFormvalue(e) {
    //Write your code here
	 e.preventDefault()
    const fname=e.target[0].value
	const sname=e.target[1].value
	alert(`${fname} ${sname}`)
}
const container=document.getElementById("form1")
container.addEventListener("submit",getFormvalue)
