let teams = [
    {
        id: 1,
        name: "Barcelona",
        defaultColor: "blue",
        leader: "Messi",
    },
    {
        id: 2,
        name: "PSG",
        defaultColor: "red",
        leader: "Mbappe",
    },
    {
        id: 3,
        name: "Arsenal",
        defaultColor: "yellow",
        leader: "Lewandowski",
    }
];

const resolvers = {
    Query: {
        teams: () => teams
    },
    Mutation: {
        createTeam: (_, { input }) => {
            const newTeam = {
                id: String(teams.length + 1),
                ...input
            }
            teams.push(newTeam);
            return newTeam;
        },
        updateTeam: (_, {  id, input }) => {
            const team = teams.find(team => String(team.id) === String(id));
            if(team) {
                Object.assign(team, input);
                return team;
            }
            return null;
        },
        deleteTeam: (_, { id }) => {
            const teamIndex = teams.findIndex(team => String(team.id) === String(id));
            if(teamIndex !== -1) {
                const deleteTeam = teams[teamIndex];
                teams.splice(teamIndex, 1);
                return deleteTeam;
            }
            return null;
        }
    },
};
module.exports = { resolvers };