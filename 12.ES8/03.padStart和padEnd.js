const message = 'Hello';

const newMessage = message.padStart(15,'*').padEnd(20,"-");
console.log(newMessage);

// 应用场景 银行卡号
const cardNumber = '123456789123456';
const lastFourCardNumber = cardNumber.slice(-4);
const finalCard = lastFourCardNumber.padStart(cardNumber.length, '*');
console.log(finalCard);