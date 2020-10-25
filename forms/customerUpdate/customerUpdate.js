let allNames = ""
customerUpdate.onshow=function(){
    // get the data to populate the dropdown with names from database
    let query = "SELECT name FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)


    if (req.status == 200) { //transit worked.
            allNames = JSON.parse(req.responseText)
            // names now in results array - load names into the dropdown
            selUpdate.clear()
            for (i = 0; i <= allNames.length - 1; i++)
                selUpdate.addItem(allNames[i])
    } else {
        // transit error
        NSB.MsgBox(`Error: ${req.status}`);
    }  

}

btnUpdate.onclick=function(){
    let newName = inptNewName.value
    let oldName = selUpdate.value
    
    let found = false
    for (i = 0; i <= allNames.length - 1; i++) {
        // console.log(`FOUND IS false and name is ${allNames[i]}`)
        if (oldName == allNames[i]) {
            found = true
            break
        }
     }   
    if (found == false) 
       NSB.MsgBox("That pet name is not in the database.")
    else if (found == true) {
        query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'
        //alert(query)
       req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

        if (req.status == 200) { //transit worked.
            if (req.responseText == 500) {   // means the update succeeded
                NSB.MsgBox(`You have successfully changed the pet name!`)
                // reset controls to original state
                inptNewName.value = ""
                selUpdate.value = ""
            } else
                NSB.MsgBox(`There was a problem changing the pet name.`)
        } else 
            // transit error
            NSB.MsgBox(`Error: ${req.status}`);
    } // found is true 
}
