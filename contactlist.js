var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['123 Microsoft Way', 'LA', 'CA', '99999']
        },
    steve: {
        firstName: "Steve",
        lastName: "Martin",
        number: "(602) 555-5555",
        address: ['123 Fake Street', 'Orlando','FL', '12345']
        }
};

var list = function (friends) {
    for (var firstName in friends) {
        console.log(firstName);
    }
};

var search = function (name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
        }
    }
};
list(friends);
