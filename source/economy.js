var money exports.money = {
  get: function(user) {
   return db.getInfo('money,csv', user, false);
  },
};

exports.shop = {
currency: 'SP',
items: ['Symbol', 'Perma-Symbol', 'Room', 'League Room', 'Ticket', 'Casino Pass', 'Casino Ticket', 'Custom Avatar', 'Trainer-Card', 'Custom-Cards','Bot'],
prices: {
symbol: 5,
permasymbol: 50,
room: 85,
leagueroom: 20,
ticket, 5,
casinopass: 10,
casinoticket: 100,
customavatar: 25,
trainercard: 45,
customcards: 150,
bot: 50,
},
descriptions: {
symbol: 'A symbol appearing beside your name until server restart.',
permasymbol: 'A symbol that appears by your name until you change or remove it.',
room: 'Your own personal chat room, the room idea can be refused.',
leagueroom: 'Your room for your league only, this requires 20 league members..',
ticket, 'A ticket which can be used for roulette or scrateched for a prize.'',
casinopass: 'A pass for the casino until server restart.',
casinoticket: 'A permanent pass to the casino',
customavatar: 'A custom avatar, must be a 80x80 gif or png file.',
trainercard: 'A customizable HTML box.',
customcards: '3 html boxes made with bandi\'s tc maker commands.',
bot: 'A bot for your room, you can also pay for commmands, but they must be already made.',
},
};

