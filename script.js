function getFormvalue() {
    //Write your code here
	const form=document.getElementById("form1")
	fname=form.elements['fname'].value
	lname=form.elements['lname'].value
	fname=fname.trim()
	lname=lname.trim()
	alert(`${fname} ${lname}`)
}
 
