let customerList = ""

customerDelete.onshow=function(){
   txtAllCustomer_contents.style.height = "100px"
}

btnAllCustomer.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

if (req.status == 200){ 
        results = JSON.parse(req.responseText)
        console.log(results)
        
    if (results.length == 0){  
        lblDel.textContent = "There are no customer in the database."
    }else {   
        console.log(`the parsed JSON is ${results}`)
        console.log(`the first row/item in the big array is a small array: ${results[0]}`)


        // Now output the names of all the dogs into the textArea control:
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtAllCustomer.value = message
     } // end else

}else{  
        lblDel.textContent = "Error code: " + req.status
}
}

customerDelete.onshow=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

    if (req.status == 200){ //transit worked.
        customerList = JSON.parse(req.responseText)
        console.log(results)
    }else{
        // transit error
        lblDel = `Error: ${req.status}`
    }  
}


btnDel.onclick=function(){
    let customerDel = inptDel.value
    alert(customerDel)
    // make sure the pet name is in the database before you try to delete it
    let found = ""
    for (i = 0; i <= customerList.length - 1; i++) {
        if (customerDel === customerList[i][1]){
            found = true
            break // if found the item in the database jump out of loop
        }else{
            found = false
    alert(found)
    }
  }
}
    /*
    if (found == false) 
       lblDel.textContent = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = " + '"' + customerDel + '"'
      alert(query)
      
      // replace my netID with yours
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dtn75570&pass=" + pw + "&database=dtn75570&query=" + query)

      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    // means the insert succeeded
                lblDel.textContent = `You have successfully deleted the pet named ${customerDel}`
            else
                lblDel.textContent = `There was a problem deleting ${customerDel} from the database.`
      else
        // transit error
        lblDel.textContent = `Error: ${req.status}`
      } // found isi true
}


*/




















