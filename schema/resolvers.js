let users = [
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
        createUser: (_, { input }) => {
            const newUser = {
                id: String(users.length + 1),
                ...input
            }
            users.push(newUser);
            return newUser;
        },
        updateUser: (_, {  id, input }) => {
            const user = users.find(user => String(user.id) === String(id));
            if(user) {
                Object.assign(user, input);
                return user;
            }
            return null;
        },
        deleteUser: (_, { id }) => {
            const userIndex = users.findIndex(user => String(user.id) === String(id));
            if(userIndex !== -1) {
                const deleteUser = users[userIndex];
                users.splice(userIndex, 1);
                return deleteUser;
            }
            return null;
        }
    }
};
module.exports = { resolvers };