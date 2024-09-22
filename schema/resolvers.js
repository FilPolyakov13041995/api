const users = [
    {
        id: 1,
        name: "Helen Adams",
        age: 24,
        address: "Brest, France",
        status: false
    },
    {
        id: 2,
        name: "Phil Adams",
        age: 29,
        address: "Brest, France",
        status: false
    },
    {
        id: 3,
        name: "Marfa Adams",
        age: 0,
        address: "Brest, France",
        status: false
    }
];

const resolvers = {
    Query: {
        users: () => users
    },
    Mutation: {
        updateUser: (_, {  id, ...fieldsToUpdate }) => {
            const user = users.find(user => user.id === id);
            if(user) {
                Object.assign(user, fieldsToUpdate);
                return user;
            }
            return null;
        }
    }
};
module.exports = { resolvers };