function getFormvalue(e) {
    //Write your code here
	 e.preventDefault()
    let fname=e.target[0].value
	fname=fname.trim()
	let lname=e.target[1].value
	lname=lname.trim()
	alert(`${fname} ${lname}`)
}
 const container=document.getElementById("form1")
 container.addEventListener("submit",getFormvalue)
