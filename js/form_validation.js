function form_valid()
{
    function fdate_valid()
    {
        var fdate = document.getElementById("fdate").value;
        if (fdate == null || fdate == "")
        {
            alert("Date Section is Mandatory!!");
            return false;
        }
        else
        {
            alert("Date Section is Complete");
        }
    }
    
    function name_valid()
    {
        var name1 = document.getElementById("fname").value;
        var name2 = document.getElementById("mname").value;
        var name3 = document.getElementById("lname").value;
        if (name1 == null || name1 == "" || name2 == null || name2 == "" || name3 == null || name3 == "")
        {
            alert("Name Section is Mandatory!!");
            return false;
        }
        else if (typeof name1 != 'string' || typeof name2 != 'string' || typeof name3 != 'string')
        {
            alert("Name should be in Words!!");
            return false;
        }
        else
        {
            alert("Name Section is Complete");
        }
    }

    function gender_valid()  
    {
        var gender = document.getElementById("gender").value;
        if (gender == null || gender == "")
        {
            alert("Gender Section is Mandatory!!");
            return false;
        }
        else
        {
            alert("Gender Section is Complete");
        }
    }

    function dob_valid()
    {
        var dob = document.mainform.dob.value;
        if (dob == null || dob == "")
        {
            alert("Date of Birth Section is Mandatory!!");
            return false;
        }
        else
        {
            alert("Date of Birth Section is Complete");
        }
    }

    function address_valid()
    {
        var address = document.mainform.address.value;
        if (address == null || address == "")
        {
            alert("Address Section is Mandatory!!");
            return false;    
        }
        else
        {
            alert("Address Section is Complete");
        }
    }

    function contact_valid()
    {
        var contact = document.mainform.contact.value;
        var teleland = document.mainform.teleland.value;
        if (contact == null || contact == "" || teleland == null || teleland == "")
        {
            alert("Contact Section is Mandatory!!");
            return false;
        }
        else if (contact.length < 10 || contact.length > 10 || teleland.length < 8 || teleland.length > 8)
        {
            alert("Enter a Valid Number!!");
            return false;
        }
        else if (typeof contact != 'number' || typeof teleland != 'number')
        {
            if (teleland == "NA")
            {
                alert("OK");
            }
            else
            {
                alert("Enter Valid Numbers!!");
                return false;
            }
        }
        else
        {
            alert("Contact Section is Complete");
        }
    }
    
    function email_valid()
    {
        var email = document.mainform.email.value;
        var atposition = x.indexof("@");
        var dotposition = x.lastIndexof(".");
        if (email == null || email == "")
        {
            alert("Email Section is Mandatory!!");
            return false;
        }
        else if (atposition < 1 || dotposition < atposition + 2 || dotpositiion + 2 >= x.length)
        {
            alert("Please enter Valid E-Mail\natposition :" + atposition + "\ndotposition : " + dotposition);
        }
        else
        {
            alert("Email Section is Completed");
        }
    }

    return fdate_valid(),name_valid(),gender_valid(),dob_valid(),address_valid(),contact_valid(),email_valid();
}
// function form_valid()
// {
//     var datee = date_valid();
//     var namee = name_valid();
//     var gendere = gender_valid();
//     var addressee = address_valid();
//     var contacte = contact_valid();
//     var emaile = email_valid();
//     return datee;
//     return namee;
//     return gendere;
//     return addressee;
//     return contacte;
//     return emaile;
// }
function form_reset()
{
    document.getElementById("mainform").reset();
}