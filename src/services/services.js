const adding2NumsFetch = async (num1, num2) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/add2numbers/add/${num1}/${num2}` );
    const data = await response.text();

    return data;
}

const askingQuestionsFetch = async (name, time) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/askingquestions/nameandtime/${name}/${time}` );
    const data = await response.text();

    return data;
}

const greaterOrLessFetch = async (num1, num2) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/greaterorless/greaterorless/${num1}/${num2}` );
    const data = await response.text();

    return data;
}

const madLibFetch = async (animal, name, food, toy, age, animal2, name2, food2, toy2, age2) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/madlib/madlib/${animal}/${name}/${food}/${toy}/${age}/${animal2}/${name2}/${food2}/${toy2}/${age2}` );
    const data = await response.text();

    return data;
}

const magic8BallFetch = async (question) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/magic8ballcontrollers/magicball/${question}` );
    const data = await response.text();

    return data;
}

const oddOrEvenFetch = async (num) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/oddoreven/oddoreven/${num}` );
    const data = await response.text();

    return data;
}

const restaurantPickerFetch = async (type) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/restaurantpicker/restaurantpicker/${type}` );
    const data = await response.text();

    return data;
}

const reverseItAlphanumericFetch = async (input) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/reverseitalphanumeric/reverseitalpha/${input}` );
    const data = await response.text();

    return data;
}

const reverseItNumericFetch = async (num) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/reverseitnumeric/reverseitnum/${num}` );
    const data = await response.text();

    return data;
}

const sayHelloFetch = async (name) =>
{
    const response = await fetch ( `https://orrcallforone-hzh6f9asbsdab2hh.westus-01.azurewebsites.net/sayhello/sayhello/${name}` );
    const data = await response.text();

    return data;
}

export { adding2NumsFetch, askingQuestionsFetch, greaterOrLessFetch, madLibFetch, magic8BallFetch, oddOrEvenFetch, restaurantPickerFetch, reverseItAlphanumericFetch, reverseItNumericFetch, sayHelloFetch };