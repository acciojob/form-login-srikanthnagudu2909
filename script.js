function getFormvalue() {
    //Write your code here
	 e.preventDefault()
	const form=document.getElementById("form1")
    //let fname=e.target[0].
	fname=form.elements['fname'].value
	fname=fname.trim()
	//let lname=e.target[1].value
	lname=form.elements['lname'].value
	lname=lname.trim()
	alert(`${fname} ${lname}`)
}
 // const container=document.getElementById("form1")
 // container.addEventListener("submit",getFormvalue)
