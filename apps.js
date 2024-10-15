
function create() {
    let shomare = document.getElementById('shomaree')
    let number = document.getElementById('number').value

    let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    

    let val = number[number.length - 1];

   
    










    if (number.length >= 17) {
        
        alert('error')
        
        


       
let result = number.slice(0, -1);
document.getElementById('number').value = result
console.log(result)
        return
        
    }
   

    for (let i = 0; i < x.length; i++) {
        if (val == x[i]) {

            let output = ""
           
            for (let i = 0; i < number.length; i++) {
                if (i == 3) {
                    output += number[i] + " "
                } else if (i == 7) {
                    output += number[i] + " "
                } else if (i == 11) { 
                    output += number[i] + " "
                } else {
                    output += number[i]
                }

            }
            shomare.innerHTML = output

        } else if (isNaN(val)) {
            alert('only numbers are available')
            document.getElementById('shomaree').innerHTML = ""
            document.getElementById('number').value = ""
            return
        }
    }


}


function name22() {
    let name = document.getElementById('name')
    let names = document.getElementById('names').value

    let harf = names[names.length - 1];
    console.log(harf)
    if (isNaN(harf)) {
        name.innerHTML = names
    } else if (harf == ' ') {
        name.innerHTML = names
    }
    else {
        alert('only letters are available')
        document.getElementById('name').innerHTML = ""
        document.getElementById('names').value = ""
        return
    }





}


function date23() {
    let date = document.getElementById('date')
    let mah = document.getElementById('mah').value
    let sal = document.getElementById('sal').value

    let salh = sal[sal.length - 1]
    let mahh = mah[mah.length - 1]


    if (mah.length > 2 || sal.length > 2 || isNaN(salh)) {
        alert('error')
        document.getElementById('mah').value = ''
        document.getElementById('sal').value = ''
        document.getElementById('date').innerHTML = ''
    } else {
        date.innerHTML = mah + "/" + sal
    }








}
function date22() {
    let date = document.getElementById('date')
    let mah = document.getElementById('mah').value
    let sal = document.getElementById('sal').value




    let mahh = mah[mah.length - 1]


    if (sal.length > 2 || mah.length > 2 || isNaN(mahh) || mah > 12 || mah < 0) {
        alert('error')
        document.getElementById('mah').value = ''
        document.getElementById('sal').value = ''
        document.getElementById('date').innerHTML = ''
    } else {
        date.innerHTML = mah + "/" + sal
    }
}

function cvv() {
    let cvv2s = document.getElementById('cvv2s')
    let cvv2 = document.getElementById('cvv2').value

    

    let cv = cvv2[cvv2.length - 1]


    if (cvv2.length > 4 || isNaN(cv)) {
        alert('error')
        document.getElementById('cvv2').value = ''
        document.getElementById('cvv2s').innerHTML = ''
    } else {
        cvv2s.innerHTML = cvv2
    }

}



