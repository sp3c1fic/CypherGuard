
export function validate () {
    

    const textPattern = new RegExp('^[a-zA-Z]+(?: [a-zA-Z]+)*$');
 

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('.contact-form');

        if (form !== null) {
            
            const nameInputField = document.querySelector('#name');
    
            console.log(nameInputField);
    
            if (nameInputField.value.length === 0) {
                console.log('Name cannot be empty!');
            }
     
            console.log(form);
            console.log(nameInputField);
        }
    
    });

    // BASIC FORM VALIDATIOON MUST BE UMPLEMENTED SO THAT 
    // ATTACKS SUCH AS XSS HTML Injections and so on are avoided

}
