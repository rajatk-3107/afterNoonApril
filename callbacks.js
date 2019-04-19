const callback_function = result => {
    console.log("From Callback Function")
    console.log(result)
}

const main_function = (x,y) => {
    /**
     * x=50;
     * y= result => {
    console.log("From Callback Function")
    console.log(result)
}
     */
    console.log("From main function")
    if(x>=40){
        y('Passed')
    }else{
        y('Failed')
    }
}

main_function(50, callback_function)
