function BMICalculator(){
    let feet=document.getElementById("feet").value
    let inch=document.getElementById("inch").value
    let kg=document.getElementById("kg").value
    feet=parseInt(feet)
    inch=parseInt(inch)
    kg=parseInt(kg)
    let height=(feet*12+inch) * 0.0254
    let res=kg/(height*height)
    document.getElementById("result").innerHTML="Result : "+ res
}